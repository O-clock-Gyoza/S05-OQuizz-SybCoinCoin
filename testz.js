//const Level = require("./app/models/levelz");
const Question = require("./app/models/questionz");

const { Op } = require("sequelize"); // necessaire pour utiliser les op


// LES TESTS SONT DEPENDANT DU CONTENU DES BASE

// select all

//Level.findAll();

//sans rien
/*
Question.findAll(
	).then(
		(values)=>{

			for( let value of values)
			{
				console.log(value.id, value.question);
			}
		}
	);

*/

//le where
/*
Question.findAll(
	{
		where: {
			id: 32
		  }
		
	}
	).then(
		(values)=>{
			for( let value of values)
			{
				console.log(value.id, value.question);
			}
		}
	);

//------*/


// test des limits
/*
Question.findAll(
{ offset: 5, limit: 5 }

).then(
	(values)=>{
		
		for( let value of values)
		{
			console.log(value.id, value.question);
		}
	}
);

*/
// findOne 
// a faire