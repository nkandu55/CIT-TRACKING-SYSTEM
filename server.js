const express = require("express");
const crypto = require("crypto");
const { ethers } = require("ethers");
require("dotenv").config();

const cors = require("cors");
const app = express();

app.use(cors()); 
app.use(express.json());

// Root test endpoint
app.get("/", (req, res) => {
  res.send("CIT backend OK 🚀");
});

// Generate Seal
app.post("/generateSeal", (req, res) => {
  const seal = crypto.randomBytes(16).toString("hex");
  res.json({ seal });
});

// GPS Logging (placeholder for contract call)
app.post("/gpsLog", async (req, res) => {
  const { id, gpsHash } = req.body;
  // TODO: call contract.logGPS(id, gpsHash) using ethers
  res.json({ ok: true, id, gpsHash });
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ CIT Backend running at http://localhost:${PORT}`);
});
