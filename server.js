const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000; // Heroku will need the PORT environment variable

app.use(express.static(path.join(__dirname, "build")));

app.get("*", async (req, res) => {
  try {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(port, () => console.log(`App is live on port ${port}!`));
