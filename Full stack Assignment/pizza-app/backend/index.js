const {connectTODb}=require("./db");
const ingredientrouter=require("./routes/Ingredient");
const express = require('express');

const app = express();

connectTODb();
app.use(express.json());

app.use('/ingredients', ingredientrouter);
// Start the server
const PORT =5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


