const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

const PASSWORD_API_URL = "https://67ac5c325853dfff53da5fe4.mockapi.io/api/v1/ak/Bhavesh/users";

app.get("/get-password", async (req, res) => {
  try {
    const response = await axios.get(PASSWORD_API_URL);

    console.log("MockAPI Response:", response.data); 

    if (Array.isArray(response.data) && response.data.length > 0) {
  
      const passwords = response.data.map((item) => item.Password);
      console.log("Extracted Passwords:", passwords);
      res.json({ passwords });
    } else {
      console.log("No passwords found in response");
      res.status(404).json({ error: "No passwords found" });
    }
  } catch (error) {
    console.error("Error fetching password:", error.message);
    res.status(500).json({ error: "Failed to fetch password" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/get-password`);
  //http://localhost:3000/get-password
});
