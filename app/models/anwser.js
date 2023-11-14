const CoreModel = require("./coreModel");

class Anwser extends CoreModel
{

    description;
    questionId;

    constructor(data)
    {
        super(data);

        if(data)
        {
            this.description = data.description;
            this.questionId = data.question_id;    
        }
      
    }

}

module.exports = Anwser;