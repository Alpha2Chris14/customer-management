// src/App.js
import React from "react";
import DashboardNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import DashboardCards from "./components/DashboardCards";
import CustomerTable from "./components/CustomerTable";

import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerHeader from "./components/CustomerHeader";

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="content">
          <DashboardNavbar className="navbar" />
          <div className="container">
            <CustomerTable />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
