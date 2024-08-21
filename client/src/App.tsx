import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

const CLIENT_ID = "Ov23liimDk3y7uJVrNZV";
const apiUrl = "http://localhost:4000";

function loginWithGithub() {
  window.location.assign(
    "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
  );
}

async function getAccessToken(code) {
  await fetch(apiUrl + "/getAccessToken?code=" + code, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

function App() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");

    if (code) getAccessToken(code);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={loginWithGithub}>Login with Github</button>
      </header>
    </div>
  );
}

export default App;
