const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../databasesqlz');

class User extends Model 
{
    /// on ne renseigne rien dans la classe, on fait ca l'exterieur via la methode static herité de Model
};

User.init({
    // level propriété
    email: {
        type: DataTypes.STRING, // type de donné accepter
        allowNull: false // indique que ce ne peut pas etre null
    },
    password: {
        type: DataTypes.STRING, // type de donné accepter
        allowNull: false // indique que ce ne peut pas etre null
    },
    firstname: {
        type: DataTypes.STRING, // type de donné accepter
        allowNull: true // par defaut autorisation detre null - pas obliger de le mettre

    },
    lastname: {
        type: DataTypes.STRING, // type de donné accepter
    },
        
}, {
    // options
    sequelize, // connection a la database
    
    tableName: "user", // nom de la table attention a la casse
    
    modelName: 'User'  // nom de  la classe attention a la casse
    
});

module.exports = User;