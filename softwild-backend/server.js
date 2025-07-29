const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // 👈 Add this line
app.use(express.json());

// Your routes
app.get("/api/data", (req, res) => {
  res.json([
    { lat: 20.5, lng: 78.9, animal: "Tiger" },
    { lat: 11.5, lng: 76.3, animal: "Elephant" },
  ]);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
