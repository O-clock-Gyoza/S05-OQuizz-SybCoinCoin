const CheckData = require("../tools/checkData");
const CoreModel = require("./coreModel");

class Question extends CoreModel
{

    static tablename = "question";

    question;
    wiki;
    anecdote;

    #levelId;
    #answerId;
    #quizId;

    constructor(data)
    {
        super(data);
        
        // ATTENTION ca ne passe pas par le mutateur (set)
        if(data)
        {
            this.question = CheckData.String(data.question);
            this.wiki = CheckData.String(data.wiki);
            this.anecdote= CheckData.String(data.anecdote);    
       

            // en principe, pas bseoin de check cette data
            // car elle est géré par la BDD et est considéré 
            // comme sure
            this.#levelId = CheckData.Int(data.level_id);
            this.#answerId = CheckData.Int(data.answer_id);
            this.#quizId = CheckData.Int(data.quiz_id);
            }
    }


    // quand l'user va renseigner une valeur a la propriété
    // elle passe pat le set (mutateur)

    set question(value) {
        
        // on y code les fonctionnalité que l'on veux.
        // ici, on verifie la valeur ecrite par un user

        this.question = CheckData.String(value);
    }

    set wiki(value) {
        this.wiki = CheckData.String(value);
    }

    set anecdote(value) {
        this.anecdote = CheckData.String(value);
    }

    //acces en lecture des propriéte privé
    get levelId() { 
         // on y code les fonctionnalité que l'on veux.
    
         // ici, on ne fait que retourner la valeur pour qu'elle soit lue.    
        return this.#levelId; 
    
    }
    get answerId() { return this.#answerId; }
    get quizId() { return this.#quizId; }

}

module.exports = Question;