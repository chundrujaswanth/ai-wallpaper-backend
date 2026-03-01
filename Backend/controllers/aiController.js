exports.generateWallpaper = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    // Mock AI response (safe & stable)
    res.status(200).json({
      success: true,
      message: "Wallpaper generated successfully",
      prompt: prompt,
      imageUrl: "https://picsum.photos/1080/1920",
    });
  } catch (error) {
    console.error("Controller error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};