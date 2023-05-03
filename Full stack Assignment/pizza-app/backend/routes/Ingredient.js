// routes/ingredients.js

const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');

const {sequelize} = require('../db');
  
const Ingredient  = require('../models/Ingredient')(sequelize);

router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredient.findAll();
    res.json(ingredients);
  } catch (err) {
    console.error('Unable to fetch ingredients:', err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
