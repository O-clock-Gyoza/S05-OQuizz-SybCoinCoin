const CoreModel = require("./coreModel");

class Tag extends CoreModel
{

    name;

    constructor(data)
    {
        super(data);

        if(data)
        {
            this.name = data.name;   
        }
    }

}

module.exports = Tag;