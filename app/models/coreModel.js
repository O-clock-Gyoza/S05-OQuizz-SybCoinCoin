const CheckData = require("../tools/checkData");

class CoreModel
{

    // propriete en privé, un utilisateur n'a pas besoin de les modifier
    #id;
    #createdAt;
    #updatedAt;

    constructor(data)
    {
        if(data)
        {
            this.#id = data.id;
            this.#createdAt = data.created_at;
            this.#updatedAt = data.updated_at;    
        }
    }

    //------

    set id(value) { this.#id = CheckData.Int(value); }

    // propriété lisible via le get (assesseur).
    get id() {return this.#id; }
    get createdAt() {return this.#createdAt; }
    get updatedAt() {return this.#updatedAt; }



}

module.exports = CoreModel;