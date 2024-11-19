import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const githubApiUrl = "https://github.com";

const CLIENT_ID = "Ov23liimDk3y7uJVrNZV";
const CLIENT_SECRET = "ba81bc90defe00f8fac90f45421011b4405e88f3";

const USER_NAME = "vix";
const PASSWORD = "vix";

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/get-client-id", (req, res) => {
  const { username, password } = req.query;

  if (username === USER_NAME && password === PASSWORD)
    return res.json(CLIENT_ID);
});

app.get("/getAccessToken", async function (req, res) {
  const code = req.query.code;
  const params =
    "?client_id=" +
    CLIENT_ID +
    "&client_secret=" +
    CLIENT_SECRET +
    "&code=" +
    code;

  await fetch(githubApiUrl + "/login/oauth/access_token" + params, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return res.json(data);
    });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
