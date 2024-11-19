import React, { useEffect } from "react";

// const CLIENT_ID = "Ov23liimDk3y7uJVrNZV";
const apiUrl = "http://localhost:4000";

async function loginWithGithub() {
  let clientId;
  await fetch(apiUrl + "/get-client-id?username=vix&password=vix", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      clientId = data;
    })
    .catch((err) => console.log(err));

  window.location.assign(
    "https://github.com/login/oauth/authorize?client_id=" + clientId
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
      localStorage.setItem("accessToken", data.access_token);
    });
}

function Login() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");

    if (code && !localStorage.getItem("accessToken")) getAccessToken(code);
  }, []);

  return <button onClick={loginWithGithub}>Login with Github</button>;
}

export default Login;
