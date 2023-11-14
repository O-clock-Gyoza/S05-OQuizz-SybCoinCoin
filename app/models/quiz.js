const CoreModel = require("./coreModel");

class Quiz extends CoreModel
{

    title;
    description;
    userId;

    constructor(data)
    {
        super(data);

        if(data)
        {
            this.title =  data.title;
            this.description = data.description;
            this.userId = data.user_id;    
        }
    }

}

module.exports = Quiz;