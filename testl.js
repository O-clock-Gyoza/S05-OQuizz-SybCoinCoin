const {Level, Question, User, Quiz, Tag, Answer} = require("./app/models/index");
const { Op } = require("sequelize"); // necessaire pour utiliser les op


// --------
// on veut la question a la clef 10
/*
Quiz.findByPk(
    
    10
    
    ).then(

    (quiz) => {

        console.log(quiz.title);
    }

)
*/

//-----
// on veut la question a la clef 10 et on associé les tags qui lui appartienne.

/*
Quiz.findByPk(
    
    2,
    {
        include:["tags"] // "join" les tags
    }
    
    ).then(

    (quiz) => {

        // trace le titre
        console.log(quiz.title);


        // constructien d'une liste
        let tagList = "";

        for(let tag of quiz.tags)
        {
            tagList += " #"+tag.name;
        }
        // 
        console.log(tagList);

    }

)
*/

//--------
// on rajoute l'autheur et les questions, yeeaaauuu
/*
Quiz.findByPk(
    
    2,
    {
        include:[
            "tags", // "join" les tags
            "author", // join de l'user aka 'author' selon notre denomation dans les liaisons
            "questions" // join "les questions"
        ] 
    }
    
    ).then(

    (quiz) => {

        // trace le titre
        console.log(quiz.title);


        // constructien d'une liste
        let tagList = "";

        for(let tag of quiz.tags)
        {
            tagList += " #"+tag.name;
        }
        // 
        console.log(tagList);

        // trace de l'author

        console.log("author :"+quiz.author.firstname+" "+quiz.author.lastname);

        // trace des quetions
        for(let question of quiz.questions)
		{
			
			console.log("--  "+question.question);
        }


    }

)

*/
// on rajoute les reponse au question gnnnh?

Quiz.findByPk(
    
    2,
    {
        include:[
            "tags", // "join" les tags
            "author", // join de l'user aka 'author' selon notre denomation dans les liaisons
            {association: "questions", include: ["answers"]  }// join les "questions" ET les "reponse"
        ] 
    }
    
    ).then(

    (quiz) => {

        // trace le titre
        console.log(quiz.title);


        // constructien d'une liste
        let tagList = "";

        for(let tag of quiz.tags)
        {
            tagList += " #"+tag.name;
        }
        // 
        console.log(tagList);

        // trace de l'author

        console.log("author :"+quiz.author.firstname+" "+quiz.author.lastname);

        // trace des quetions
        for(let question of quiz.questions)
		{
			
			console.log("--  "+question.question);

            let answerList = "   > ";
            for(let answer of question.answers)
            {
                answerList += answer.description+",";
            }
            console.log(answerList);

        }
        

    }

)