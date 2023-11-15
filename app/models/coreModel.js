const CheckData = require("../tools/checkData");

class CoreModel
{

    static tablename;

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

    set id(value) { this.#id = value; /*this.#id = CheckData.Int(value);*/ }

    // propriété lisible via le get (assesseur).
    get id() {return this.#id; }
    get createdAt() {return this.#createdAt; }
    get updatedAt() {return this.#updatedAt; }



    static GetAll(callback)
    {
        // requete :

        // on passe le nom de la table via une propriété static 
        // dont la valuer est ecrasé par l'objet enfant 
        // via un declartion de la meme propriété static

        client.query(`SELECT * FROM "${this.tablename}"`, (err, results) => {

            // si il y'a une erreur
            if (err) {
                return callback(err, null);
            }

            // si il y a une reponse : 

            if (!results.rowCount) {
                // reponse sans contenu
                return callback(null, []);
            }
            else
            {
                // au moins un contenu
                // on organise un tableau de reponse

                let objs = [];

                for (let data of results.rows)
                {

                    // on cree les object avec this qui prendra la refencre de class qui est etendu par coremodel
                    objs.push(new this(data));
                }

                callback(null, objs);
            }


        });

    }

    static GetOne(id, callback)
    {
        // notre requete dynamique
        const query = {
            text: `SELECT * FROM "${this.tablename}" WHERE id=$1`,
            values: [id]
        };

        client.query(query, (err, result) => {
            // on refait les meme cas de figure...
            if (err) {
                return callback(err, null);
            }

            // on a a pas derreur, on gere le resultat

            
            if (!result.rowCount) {
                // reponse  avec 0 resultat
                return callback(null, null);
            }
            else
            {
                let level = new this(result.rows[0]);
                return callback(null, level);
            }

        });

    }







}

module.exports = CoreModel;