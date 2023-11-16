/*
const Level = require("./app/models/level");
const Question = require("./app/models/question");
const User = require("./app/models/user");
const Tag = require("./app/models/tag");
const Answer = require("./app/models/answer");
const Quiz = require("./app/models/quiz");
*/

const {Level, Question, User, Quiz, Tag, Answer} = require("./app/models/index");



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
/*
Level.findAll(
	//
	
	{ where:
		{
			[Op.or]: [{name:"Expert"}, {name:"plus ultra"}]
		}
		
	}
	
	).then(
		(values)=>{
			
			for( let value of values)
			{
				console.log(value.id, value.name);
			}
		}
	);

	*/
	/*
	Level.findAll(
		{ 
			attribute:['name','nom']
		}

		).then(
			(values)=>{
				
				for( let value of values)
				{

					console.log(value.id, value.name);
				}
			}
		);
*/

	Level.findAll(
		{
			where:
			{
				[Op.or]: [{name:"Expert"}, {name:"plus ultra"}]

			},
			limit:5
					
		}
		).then(
			(values)=>{
				
				for( let value of values)
				{
					console.log(value.id, value.name);
				}
			}
		);

		/*
	Level.findAll(
		{
			where:
			{
				[Op.and]:
				[
					{[Op.or]: [{name:"Expert"}, {name:"plus ultra"}]},
					{id: {[Op.gt]:2}},
					{id: {[Op.lt]:6}}
					
				]
				
			}
					
			

			
		}


		
		).then(
			(values)=>{
				
				for( let value of values)
				{
					console.log(value.id, value.name);
				}
			}
		);*/