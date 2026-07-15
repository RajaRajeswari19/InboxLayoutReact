import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainGridLayout from "../components/MainGridLayout/MainGridLayout";

function MainLayout() {
  const [activeTab, setActiveTab] = useState("inbox");
  const [refreshFlag, setRefreshFlag] = useState(0);

  const refreshData = () => {
    setRefreshFlag((prev) => prev + 1);
  };

  return (
    <>
      <Header activeTab={activeTab} onTabChange={setActiveTab} onRefresh={refreshData} onSaveSuccess={refreshData}/>

      <MainGridLayout activeTab={activeTab} refreshFlag={refreshFlag}/>

      <Footer />
    </>
  );
}

export default MainLayout;