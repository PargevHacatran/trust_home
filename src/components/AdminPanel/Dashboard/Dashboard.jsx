// Dashboard/Dashboard.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard({ children }) {
  return (
    <div className="admin-container">
      <div className="sidebar">
        <h1 className="sidebar-title">Admin</h1>
        
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink 
                to="/admin" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin-developers" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Застройщики
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/analytics" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Аналитика
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contracts" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Договоры и чеки
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
      
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}