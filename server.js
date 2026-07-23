import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";

const app = express();
const PORT = 5000;
const DB_FILE = path.join(process.cwd(), "db.json");

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to read from db.json
async function readDB() {
  try {
    const data = await fs.readFile(DB_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading database file:", error);
    return [];
  }
}

// Helper function to write to db.json
async function writeDB(data) {
  try {
    await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing to database file:", error);
  }
}

// GET all emails (with optional search parameter ?q=xxx)
app.get("/api/emails", async (req, res) => {
  const emails = await readDB();
  const { q } = req.query;
  if (q) {
    const query = String(q).toLowerCase();
    const filtered = emails.filter(e => 
      e.name.toLowerCase().includes(query) || 
      e.email.toLowerCase().includes(query) || 
      (e.subject && e.subject.toLowerCase().includes(query)) ||
      e.body.toLowerCase().includes(query)
    );
    return res.json(filtered);
  }
  res.json(emails);
});

// POST new email
app.post("/api/emails", async (req, res) => {
  const { name, email, subject, body } = req.body;
  
  if (!name || !email || !body) {
    return res.status(400).json({ error: "Name, email, and body are required." });
  }

  const emails = await readDB();

  // Create new email object
  const newEmail = {
    id: String(Date.now()), // unique id using timestamp
    name,
    email,
    subject: subject || "",
    body,
    avatar: `https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/${Math.floor(Math.random() * 99) + 1}.jpg`,
    isDeleted: false
  };

  emails.push(newEmail);
  await writeDB(emails);

  res.status(201).json(newEmail);
});

// PUT (update) email
app.put("/api/emails/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const emails = await readDB();
  const index = emails.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Email not found." });
  }

  // Update fields
  emails[index] = {
    ...emails[index],
    ...updates
  };

  await writeDB(emails);
  res.json(emails[index]);
});

// DELETE email
app.delete("/api/emails/:id", async (req, res) => {
  const { id } = req.params;

  let emails = await readDB();
  const initialLength = emails.length;
  emails = emails.filter(e => e.id !== id);

  if (emails.length === initialLength) {
    return res.status(404).json({ error: "Email not found." });
  }

  await writeDB(emails);
  res.json({ message: "Email deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
