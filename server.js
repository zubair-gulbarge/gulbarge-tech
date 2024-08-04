const express = require("express");
const router = express.Router();
const cors = require("cors");
require('dotenv').config(); // Load environment variables

// Create server
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

// Example endpoint for server status
router.get("/status", (req, res) => {
  res.json({ status: "Server is running" });
});

// Start server
app.listen(5000, () => console.log("Server Running"));
