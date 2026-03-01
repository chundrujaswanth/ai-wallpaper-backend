const generateBtn = document.getElementById("generateBtn");
const wallpaperImg = document.getElementById("wallpaper");
const promptInput = document.getElementById("prompt");

generateBtn.addEventListener("click", async () => {
  const prompt = promptInput.value.trim();

  if (!prompt) {
    alert("Please enter a prompt");
    return;
  }

  generateBtn.innerText = "Generating...";
  generateBtn.disabled = true;

  try {
    const response = await fetch("http://127.0.0.1:5000/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    if (data.success) {
      wallpaperImg.src = data.imageUrl;
    } else {
      alert("Failed to generate wallpaper");
    }
  } catch (error) {
    alert("Backend not reachable");
    console.error(error);
  }

  generateBtn.innerText = "Generate Wallpaper";
  generateBtn.disabled = false;
});