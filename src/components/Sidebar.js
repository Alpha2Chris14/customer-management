import React from "react";
import { Link } from "react-router-dom";
import "./css/Sidebar.css"; // Import custom styles for the sidebar
import {
  User2Icon,
  HelpCircleIcon,
  DatabaseIcon,
  SettingsIcon,
} from "lucide-react";
import { ArrowRight, People } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="16" fill="#2DC38C" />
        </svg>
        <span>My Company</span>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/quick-action" className="menu-item">
            <DatabaseIcon size={18} />
            <span>Quick Action</span>
          </Link>
        </li>
        <li>
          <Link to="/customers" className="menu-item active">
            <User2Icon size={18} />
            <span>Customers</span>
          </Link>
        </li>
        <li>
          <Link to="/teams" className="menu-item">
            <People size={18} />
            <span>Teams</span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="menu-item">
            <SettingsIcon size={18} />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div className="feedback-section">
        <div className="row">
          <div className="col-2">
            <HelpCircleIcon size={18} />
          </div>
          <div className="col-10">
            <p className="feedback_header">Have feedback?</p>
            <p className="feedback_body">
              Read our docs to resolve any bug or issues encountered.
            </p>
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
