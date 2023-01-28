import React from "react";
import { useEffect } from "react";
import TabsBtn from "../Components/Dashboard-Tabs";
import FooterForms from "../Components/Form_Footer";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
const PpdbApps = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user") === null || localStorage.getItem("user") === undefined) {
      navigate("/login");
    }
  });

  return (
    <div className="px-16 font-Open-sans">
      <Navbar />
      <TabsBtn />
      <FooterForms />
    </div>
  );
};

export default PpdbApps;
