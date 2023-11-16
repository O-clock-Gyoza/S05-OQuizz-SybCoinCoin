const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../databasesqlz');

class Answer extends Model 
{
    /// on ne renseigne rien dans la classe, on fait ca l'exterieur via la methode static herité de Model
};

Answer.init(
    {
    // level propriété
    description: {
        type: DataTypes.STRING, // type de donné accepter
        allowNull: false // indique que ce ne peut pas etre null
    }
        
}, {
    // options
    sequelize, // connection a la database
    
    tableName: "answer", // nom de la table attention a la casse
    
    modelName: 'Answer'  // nom de  la classe attention a la casse
    
});

module.exports = Answer;