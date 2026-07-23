import { useState } from "react";
import "./CreateEmailModal.css";

import type { CreateEmailModalProps, } from "../../types/Email";

import { createEmail, } from "../../services/emailService";
import Portal from "../Portal/Portal";

function CreateEmailModal({ isOpen, onClose, onSave, }: CreateEmailModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleSave = async () => {
    if (!name || !email || !subject || !body) {
      alert("All fields are required.");
      return;
    }

    try {
      await createEmail({ name, email, subject, body });

      setName("");
      setEmail("");
      setSubject("");
      setBody("");

      onSave();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Portal>
      <div className="modal-overlay" onClick={onClose} >
        <div className="modal-content" onClick={(e) => e.stopPropagation() }>
          <span className="close-btn" onClick={onClose} >
            &times;
          </span>

          <h2> Compose Email Content </h2>

          <input type="text" placeholder="Sender Name" value={name}
            onChange={(e) => setName(e.target.value)}/>

          <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value) } />

          <input type="text" placeholder="Subject" value={subject}
            onChange={(e) => setSubject(e.target.value) } />

          <textarea rows={6} placeholder="Message" value={body} 
          onChange={(e) => setBody(e.target.value) } />

          <div className="modal-footer">
            <button className="save-btn" onClick={handleSave}> Save </button>
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default CreateEmailModal;