/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import logo from "../assets/GLS-logo-white.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/navbar.css";

function navbar() {
  const [openLinks, setopenLinks] = useState(false);
  const togglenavbar = () => {
    setopenLinks(!openLinks);
  };
  
  //TO DO: make separate navbar based on auth status
  if(true) {
    return (
      <div className="App">
        <div className="navbar">
          <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={logo} alt="logo" />
            <div className="hiddenLinks">
              <Link to="/"> Home </Link>
              <a href="/queues"> Queues </a>
              <a href="/authenticated"> Authenticated </a>
              <a href="/admin"> Admin </a>
              {/* <Link to="/reports"> Reports </Link> */}
              <a href="/.auth/login/aad"> Login </a>
              <a href="/.auth/logout"> Logout </a>
            </div>
          </div>
          <div className="rightSide">
            <Link to="/"> Home </Link>
            <a href="/queues"> Queues </a>
            <a href="/authenticated"> Authenticated </a>
            <a href="/admin"> Admin </a>
            {/* <Link to="/reports"> Reports </Link> */}
            <a href="/.auth/login/aad"> Login </a>
            <a href="/.auth/logout"> Logout </a>
            <button onClick={togglenavbar}>
              <ReorderIcon />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="navbar">
          <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={logo} alt="logo" />
            <div className="hiddenLinks">
              <Link to="/"> Home </Link>
              <a href="/.auth/login/aad"> Login </a>
            </div>
          </div>
          <div className="rightSide">
            <Link to="/"> Home </Link>
            <a href="/.auth/login/aad"> Login </a>
            <button onClick={togglenavbar}>
              <ReorderIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default navbar;
