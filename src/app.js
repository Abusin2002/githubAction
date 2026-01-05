const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Demo API running" });
});
fjdsaljldsafj

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

module.exports = app;
