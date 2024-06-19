const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

async function fetchEnv() {
  try {
    const response = await fetch("http://localhost:4001/env");
    const env = await response.json();

    const envContent = `VITE_API_URL=${env.VITE_API_URL}\n`;
    fs.writeFileSync(
      path.resolve(__dirname, "frontend/.env.local"),
      envContent
    );

    console.log("Env variables fetched and written to .env.local");
  } catch (error) {
    console.error("Failed to fetch env variables", error);
  }
}

fetchEnv();
