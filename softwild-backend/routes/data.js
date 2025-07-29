import express from 'express';
import fs from 'fs';
import path from 'path';
import Animal from '../models/Animal.js';

const router = express.Router();

// Load mock data and save to DB
router.get('/seed', async (req, res) => {
  const filePath = path.resolve('mock', 'mockdata.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  try {
    await Animal.deleteMany(); // clear old
    await Animal.insertMany(data); // insert new
    res.json({ message: '✅ Data seeded successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get animals from DB
router.get('/data', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
