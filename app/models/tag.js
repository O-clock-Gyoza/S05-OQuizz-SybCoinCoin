const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../databasesqlz');

class Tag extends Model 
{
    /// on ne renseigne rien dans la classe, on fait ca l'exterieur via la methode static herité de Model
};

Tag.init({
    // level propriété
    name: {
        type: DataTypes.STRING, // type de donné accepter
        allowNull: false // indique que ce ne peut pas etre null
    }
        
}, {
    // options
    sequelize, // connection a la database
    
    tableName: "tag", // nom de la table attention a la casse
    
    modelName: 'Tag'  // nom de  la classe attention a la casse
    
});

module.exports = Tag;