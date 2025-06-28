// Dashboard/Dashboard.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import { sideBarNavigationList } from "../../../utils/admin/sideBarNavigationList";
import { SideBar } from "../../public/SideBar";
import { content } from "../../../utils/admin/content";

export default function Dashboard() {
  const searchURLParams = new URLSearchParams(document.location.search); 

  return (
    <div className="admin-container">
      <div className="sidebar">
        <SideBar 
          sidebarNavigationList={sideBarNavigationList}
        />
      </div>
      
      <div className="main-content">
        { content[searchURLParams.get("tab")] }
      </div>
    </div>
  );
}