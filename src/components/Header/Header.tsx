import { useState } from "react";
import "./Header.css";
import EditButton from "../EditButton/EditButton";
import UserInfo from "../UserInfo/UserInfo";
import CreateEmailModal from "../CreateEmailModal/CreateEmailModal";
import type { HeaderProps } from "../../types/Email";

function Header({ activeTab, onTabChange, onRefresh, onSaveSuccess,}: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <EditButton onClick={openModal} />
        </div>

        <div className="nav-center">
          <i className="fas fa-sync-alt refresh-icon" onClick={onRefresh} ></i>

          <nav className="nav-links">
            <a href="#" className={ activeTab === "inbox" ? "active-tab" : ""}
              onClick={(e) => { e.preventDefault(); onTabChange("inbox");}}> Inbox
            </a>
            <a href="#"> Sent </a>
            <a href="#"> Drafts </a>
            <a href="#" className={ activeTab === "trash" ? "active-tab" : "" }
              onClick={(e) => { e.preventDefault(); onTabChange("trash"); }}> Trash
            </a>
            <a href="#"> Junk </a>
          </nav>
        </div>

        <div className="header-right">
          {/* <UserInfo name="Raja Rajeswari" email="rajarajeswari.venkatesan@ideas2it.com"/> */}
          <UserInfo name = {sessionStorage.getItem("name")||"Raja Rajeswari"} 
            email={sessionStorage.getItem("emailId")|| "rajarajeswari.venkatesan@ideas2it.com"}></UserInfo>
        </div>
      </header>

      <CreateEmailModal isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} onSave={onSaveSuccess} />
    </>
  );
}

export default Header;