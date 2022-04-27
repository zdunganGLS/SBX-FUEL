import React, { useState } from "react";
import "../styles/home.css";
import { Button } from "@mui/material";
import Axios from "axios";

function Home() {
  const [AppData, setAppData] = useState();

  //Authenticates the user in via Azure auth, puts their user info in the pre tag on the page
  async function getUserInfo() {
    const response = await fetch('/.auth/me');
    const user = await response.json();
    const pre = document.querySelector('pre');
    pre.textContent = JSON.stringify(user, null, 2);
    // window.UserRolesList = user.clientPrincipal.userRoles;
  }
  getUserInfo();

  //Calls the function app to return a list of apps
  const getsqldata = () => {
    Axios.get(`${process.env.REACT_APP_URL}`).then((response) => {
      setAppData(response)
    });
  };

  return (
    <div className="headerContainer">
      <h1> Funder Work Action Tool </h1>
      <h2> Here is some info about you: </h2>
      {/* <Button size="medium" variant="contained" href="/.auth/login/aad">
        LOGIN
      </Button>
      <br /><br />
      <Button size="medium" variant="contained" href="/.auth/logout">
        LOGOUT
      </Button> */}
      <pre></pre>
      <h2> Click the button below for some info about your apps: </h2>
      {/* {process.env.REACT_APP_URL} */}
      <Button size="medium" variant="contained" onClick={getsqldata}>
        Get App Data
      </Button>
      <br /><br />
      {JSON.stringify(AppData)}
    </div>
  );
}

export default Home;