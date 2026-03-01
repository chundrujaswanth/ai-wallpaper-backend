const express = require("express");
const router = express.Router();

// ✅ EXACT match with file name
const { generateWallpaper } = require("../controllers/aiController");

// POST /api/generate
router.post("/generate", generateWallpaper);

module.exports = router;