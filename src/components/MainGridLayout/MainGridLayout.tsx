import { useEffect, useState } from "react";
import type { Email, MainGridLayoutProps, } from "../../types/Email";
import useDebounce from "../../hooks/useDebounce";
import { getEmails, moveToTrash, deleteEmail, } from "../../services/emailService";
import EmailCard from "../EmailCard/EmailCard";
import SearchBar from "../SearchBar/SearchBar";

import "./MainGridLayout.css";

function MainGridLayout({ activeTab, refreshFlag, }: MainGridLayoutProps) {
  const [emails, setEmails] = useState<Email[]>([]);

  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 400);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Loading data...");
    loadData();
  }, [activeTab, refreshFlag]);

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await getEmails();

      const data =
        activeTab === "trash" ? response.filter((x: Email) => x.isDeleted)
          : response.filter((x: Email) => !x.isDeleted);

      setEmails(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (
    id: string
  ) => {
    try {
      if (activeTab === "inbox") {
        await moveToTrash(id);
      } else {
        const confirmed =
          window.confirm(
            "Delete permanently?"
          );

        if (!confirmed) {
          return;
        }

        await deleteEmail(id);
      }

      loadData();
    } catch (error) {
      console.log(error);
    }
  };

    if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }
  
  const filteredEmails = emails.filter((item) => {
    const search = debouncedSearch.toLowerCase();

    return (item.name.toLowerCase().includes(search) ||
      item.email.toLowerCase().includes(search) ||
      item.body.toLowerCase().includes(search)
    );
  });

  return (
    <>
      <SearchBar searchText={searchText} onSearchChange={setSearchText} />

      <div className="grid-container">
        {filteredEmails.length === 0 ? (<h3>No Records Found</h3>) :
          (filteredEmails.map((item) => (
            <EmailCard key={item.id} email={item} onDelete={handleDelete}
            />
          ))
          )}
      </div>
    </>
  );
}

export default MainGridLayout;