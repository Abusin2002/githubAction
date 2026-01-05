const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Demo API running" });
});


app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION ❌");
  console.error(err.stack); // shows file + line
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED PROMISE REJECTION ❌");
  console.error(err.stack);
  process.exit(1);
});


module.exports = app;
