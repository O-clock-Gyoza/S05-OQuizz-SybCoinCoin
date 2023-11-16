const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../databasesqlz');

class Question extends Model 
{
    /// on ne renseigne rien dans la classe, on fait ca l'exterieur via la methode static herité de Model
};

Question.init(
	{
	// level propriété
	//
	question: { //nom dans la database
		type: DataTypes.STRING, // type de donné accepter
		allowNull: false // indique que ce ne peut pas etre null
	},
	wiki: {
		type: DataTypes.STRING// type de donné accepter
	},
	anecdote: {
		type: DataTypes.STRING, // type de donné accepter
	}
        
  }, {
    // options
    sequelize, // connection a la database
    
    tableName: "question", // nom de la table attention a la casse

    modelName: 'Question'  // nom de la classe attention a la casse
    
  });
  
  module.exports = Question;