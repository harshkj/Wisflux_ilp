// models/Ingredient.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  Ingredient.sync({force:true}).then(() => {
    console.log('Ingredient table cleared');
    Ingredient.bulkCreate([{ name: 'Tomato Sauce', price: 2.5 },
                           { name: 'Mozzarella Cheese', price: 3.0 },
                           { name: 'Pepperoni', price: 1.5 }
  ]);
   console.log('Ingredient table seeded with data ');
  }).catch((err) => {
    console.error('Unable to synchronize database:', err);
  });

  Ingredient.fetchAllIngredients=async()=>{
    try {
      const ingredients = await Ingredient.findAll();
      return ingredients;
    } catch (err) {
      console.error('Unable to fetch ingredients:', err);
    }
  };

  return Ingredient;
};
