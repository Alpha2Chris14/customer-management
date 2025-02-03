// src/components/Navbar.js
import { SearchIcon } from "lucide-react";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Bell, QuestionCircle, Search } from "react-bootstrap-icons";

const DashboardNavbar = () => {
  return (
    <Navbar bg="white" className="border-bottom shadow-sm">
      <Container fluid>
        <Nav className="ms-auto d-flex align-items-center nav-spacing">
          <div class="search-box">
            <SearchIcon size={24} color="#BBBBCB" />
            <input
              type="text"
              class="form-control"
              placeholder="Search customer details"
            />
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="22" height="22" rx="6" fill="#EAECF2" />
              <path
                d="M12.75 9.25V12.75H9.25V9.25H12.75Z"
                stroke="#6F7079"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M12.75 12.75H14.5C15.4665 12.75 16.25 13.5335 16.25 14.5C16.25 15.4665 15.4665 16.25 14.5 16.25C13.5335 16.25 12.75 15.4665 12.75 14.5V12.75Z"
                stroke="#6F7079"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M9.25 12.7512H7.5C6.5335 12.7512 5.75 13.5346 5.75 14.5012C5.75 15.4676 6.5335 16.2512 7.5 16.2512C8.4665 16.2512 9.25 15.4676 9.25 14.5012V12.7512Z"
                stroke="#6F7079"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M12.75 9.25V7.5C12.75 6.5335 13.5335 5.75 14.5 5.75C15.4665 5.75 16.25 6.5335 16.25 7.5C16.25 8.4665 15.4665 9.25 14.5 9.25H12.75Z"
                stroke="#6F7079"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M9.25 9.25V7.5C9.25 6.5335 8.4665 5.75 7.5 5.75C6.5335 5.75 5.75 6.5335 5.75 7.5C5.75 8.4665 6.5335 9.25 7.5 9.25H9.25Z"
                stroke="#6F7079"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              width="44"
              height="22"
              viewBox="0 0 44 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="22" rx="6" fill="#EAECF2" />
              <path
                d="M2.24 16.82L6.872 6.98H8.084L3.452 16.82H2.24ZM15.0764 15.644C13.8524 15.644 12.8124 15.22 11.9564 14.372C11.1004 13.516 10.6724 12.472 10.6724 11.24C10.6724 10.008 11.1004 8.968 11.9564 8.12C12.8124 7.264 13.8524 6.836 15.0764 6.836C15.9004 6.836 16.6484 7.032 17.3204 7.424C17.9924 7.808 18.5244 8.332 18.9164 8.996L17.7044 9.692C17.0884 8.692 16.2124 8.192 15.0764 8.192C14.2364 8.192 13.5284 8.488 12.9524 9.08C12.3764 9.672 12.0884 10.392 12.0884 11.24C12.0884 12.088 12.3764 12.808 12.9524 13.4C13.5284 13.992 14.2364 14.288 15.0764 14.288C16.2124 14.288 17.0884 13.788 17.7044 12.788L18.9164 13.484C18.5244 14.148 17.9924 14.676 17.3204 15.068C16.6484 15.452 15.9004 15.644 15.0764 15.644ZM22.4673 15.56C21.8593 15.56 21.3633 15.392 20.9793 15.056C20.6033 14.712 20.4153 14.216 20.4153 13.568V10.676H19.1673V9.5H20.4153V7.832H21.7353V9.5H23.4513V10.676H21.7353V13.352C21.7353 13.72 21.8153 13.984 21.9753 14.144C22.1353 14.296 22.3913 14.372 22.7433 14.372C23.0313 14.372 23.2673 14.332 23.4513 14.252V15.428C23.1633 15.516 22.8353 15.56 22.4673 15.56ZM24.4632 15.5V9.5H25.7832V10.568C25.8952 10.232 26.0992 9.96 26.3952 9.752C26.6992 9.544 27.0232 9.44 27.3672 9.44C27.5752 9.44 27.7472 9.456 27.8832 9.488V10.844C27.6912 10.772 27.4712 10.736 27.2232 10.736C26.8232 10.736 26.4832 10.9 26.2032 11.228C25.9232 11.548 25.7832 11.996 25.7832 12.572V15.5H24.4632ZM28.7817 15.5V6.5H30.1017V15.5H28.7817ZM39.9077 15.5L35.7677 11.516V15.5H34.3757V6.98H35.7677V10.652L39.1877 6.98H40.9637L37.1717 11.06L41.8037 15.5H39.9077Z"
                fill="#6F7079"
              />
            </svg>
          </div>
          <Search
            className="me-3 circle-background"
            size={20}
            color="#6C6B72"
          />
          <QuestionCircle
            className="me-3 circle-background"
            size={20}
            color="#6C6B72"
          />
          <Bell className="me-3 circle-background" size={20} color="#6C6B72" />
          <div className="circle-background bg-primary text-white circle-text">
            JA
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default DashboardNavbar;
