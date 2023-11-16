const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../databasesqlz');

class Quiz extends Model 
{
    /// on ne renseigne rien dans la classe, on fait ca l'exterieur via la methode static herité de Model
};

Quiz.init({
    // level propriété
    title: {
        type: DataTypes.STRING, // type de donné accepter
        allowNull: false // indique que ce ne peut pas etre null
    },
    description: {
        type: DataTypes.STRING, // type de donné accepter
    },
    
        
}, {
    // options
    sequelize, // connection a la database
    
    tableName: "quiz", // nom de la table attention a la casse
    
    modelName: 'Quiz'  // nom de  la classe attention a la casse
    
});

module.exports = Quiz;