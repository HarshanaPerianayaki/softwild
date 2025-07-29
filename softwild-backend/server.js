// ✅ Replace require() with import
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  res.json([
    { lat: 20.5, lng: 78.9, animal: "Tiger" },
    { lat: 11.5, lng: 76.3, animal: "Elephant" },
  ]);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
