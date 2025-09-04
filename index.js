const noblox = require("noblox.js");
require("dotenv").config();
const express = require("express");
const app = express();

const cookie = process.env.COOKIE;
const groupId = Number(process.env.GROUP_ID);
const PORT = 3000;

async function postShout() {
  try {
    await noblox.setCookie(cookie);
    console.log("✅ Logged into Roblox");

    const message = "📢 Training starting in 10 minutes! Get ready!";
    await noblox.shout(groupId, message);
    console.log("✅ Shout posted:", message);
  } catch (err) {
    console.error("❌ Error posting shout:", err.message);
  }
}

// Keep Replit alive
app.get("/", (req, res) => res.send("Bot is running"));
app.listen(PORT, () => console.log(`🌐 Web server running on port ${PORT}`));

// Post a shout every 1 hour
postShout(); // Post once at start
setInterval(postShout, 60 * 60 * 1000); // Every hour
