const CoreModel = require("./coreModel");

// en etendant CoreModel, Level acquiert toutes les composantes
// de CoreModel (les propriété et les methodes)

class User extends CoreModel
{

    email;
    password;
    firstname;
    lastname;

    constructor(data)
    {
        super(data);
        if(data)
        {
            this.email = data.email;
            this.password = data.password ;
            this.firstname = data.firstname;
            this.lastname = data.lastname;    
        }
    }

}

module.exports = User;