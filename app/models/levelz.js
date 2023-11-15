const {Sequelize,DataTypes, Model} = require('sequelize');
const sequelize = require('../databasesqlz');

class Level extends Model {};

Level.init({
    // level propriété
    name: {
      type: DataTypes.STRING, // type de donné accepter
      allowNull: false // indique que ce ne peut pas etre null
    }
  }, {
    // options
    sequelize, // connection a postgra
    
    tableName: "level", // nom de la table attention a la case
    
    modelName: 'Level'  // nom de l'object attention a la case
    
  });
  
  module.exports = Level;