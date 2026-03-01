const express = require("express");
const cors = require("cors");
require("dotenv").config();

const generateRoute = require("./routes/generate");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("AI Wallpaper Backend Running ✅");
});

// API routes
app.use("/api", generateRoute);

// PORT (important for cloud)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});