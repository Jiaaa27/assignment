const express = require("express");
const os = require("os");
const cors = require("cors");

const app = express();
app.use(cors());

// Free Memory
app.get("/api/freememory", (req, res) => {
  res.json({ freeMemory: os.freemem() });
});

// Total Memory
app.get("/api/totalmemory", (req, res) => {
  res.json({ totalMemory: os.totalmem() });
});

// CPU Architecture
app.get("/api/cpuarch", (req, res) => {
  res.json({ cpuArchitecture: os.arch() });
});

// User Info
app.get("/api/userinfo", (req, res) => {
  res.json({ userInfo: os.userInfo() });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});