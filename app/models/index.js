
const Answer = require('./answer');
const Level = require('./level');
const Question = require('./question');
const Quiz = require('./quiz');
const Tag = require('./tag');
const User = require('./user');


// liaison Question <> reponse
// la question a plusieur reponse

Question.hasMany(Answer, 
	{
	foreignKey: "question_id",
	as: "answers" // le vocabulaire depend du point de vu, ici c'est une recherche A PARTIR 
	// de la question, donc on repere/cherche des reponse avec le même lien ci dessous
});


//la reciproque : une reponse apartien a une question
// c'est le même lien que la liaison precedente
// donc le même foreignKey pour ces element 
Answer.belongsTo(Question, {

	foreignKey: "question_id",
	as: "question" // le vocabulaire depend du point de vu, ic c'est une recherche A PARTIR 
	// de la reponse, donc on repere/cherche des question avec le même lien ci dessus.
});

// cas particulier
// question a partient a la reposne : c'est la bonne reponse
// 

Question.belongsTo(Answer,
{
	foreignKey:"answer_id",
	as:"good_answer"

});

// la reciprocité existe deja, (la reponse a un question) on ne la remet pas

//-------
//relation question / level

Question.belongsTo(Level,
	{
		foreignKey: "level_id", // la clef se trouve dans table de la question,
		as:"level" // on recupere/cherche un level
	}
)

// reciproque de la liaison precedente
Level.hasMany(Question,
	{
		foreignKey: "level_id", // c'est le mien lien que precedent,mais d'un point de vu different
		as:"questions"
	}
)

//----------
// quiz / question
// meme model que precedent
Quiz.hasMany(Question,
	{
		foreignKey:"quiz_id",
		as :"questions"
		
	}
)

// reciproque
Question.belongsTo(Quiz,
	{
		foreignKey:"quiz_id", // meme liaison
		as : "quiz"
	}
)
//----------------------------------------------------
// relation quiz-user

// le quizz appartient a l'user (aka author)
Quiz.belongsTo(User,
	{
		foreignKey:"user_id",
		as:"author"
	}
)

// reciproque
User.hasMany(Quiz,
	{
		foreignKey:"user_id", // meme liaison, meme clef pour fare le lien
		as:"quizList"
	}
)


//--------
// relation Quiz/Tag
// quiz a plein de tag, et le tag a plein de quiz
// pour ce qua la on passe par une table de liaison (relationnel/corespondance...)

Quiz.belongsToMany(Tag,
	{
		through: "quiz_has_tag",// on passe a travers cette table(nom de la table)
		foreignKey: "quiz_id", // les 2 clefs necessaires pour faire la liaison 
		otherKey: "tag_id",   //
		as:"tags" // vocabulaire de ce que recupere/cherche une requete faire a pertir de quiz
	}
)

Tag.belongsToMany(Quiz,
	{
		through: "quiz_has_tag",// on passe a travers cette table(nom de la table)
		foreignKey: "tag_id",// les 2 clefs necessaires pour faire la liaison 
		otherKey: "quiz_id",
		as:"quizList"
	}
)

module.exports = { Answer, Level, Question, Quiz, Tag, User };