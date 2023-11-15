const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../databasesqlz');

class Level extends Model 
{
    /// on ne renseigne rien dans la classe, on fait ca l'exterieur via la methode static herité de Model
};

Level.init({
    // level propriété
    name: {
        type: DataTypes.STRING, // type de donné accepter
        allowNull: false // indique que ce ne peut pas etre null
      }
        
  }, {
    // options
    sequelize, // connection a la database
    
    tableName: "level", // nom de la table attention a la casse
    
    modelName: 'Level'  // nom de  la classe attention a la casse
    
  });
  
  module.exports = Level;