const CoreModel = require("./coreModel");

class Tag extends CoreModel
{
    static tablename = "tag";

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