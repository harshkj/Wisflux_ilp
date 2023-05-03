const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pizzastore', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5425,
});
const connectTODb=()=>{

    
      
// Test the database connection
        sequelize.authenticate()
        .then(() => console.log('Database connection has been established successfully.'))
        .catch((error) => console.error('Unable to connect to the database:', error));
   
        const Ingredient = require('./models/Ingredient')(sequelize);
        
        sequelize.sync()
          .then(() => {
            console.log('All models were synchronized successfully.');
          })
          .catch((err) => {
            console.error('Unable to synchronize models:', err);
          });
           
}
module.exports={connectTODb,sequelize};