const CoreModel = require("./coreModel");
const CheckData = require("../tools/checkData");
const client = require('../database');

// en etendant CoreModel, Level acquiert toutes les composantes
// de CoreModel (les propriété et les methodes)

class Level extends CoreModel
{

    name;

    constructor(data)
    {
        super(data);

        /*
        if(typeof data.name !== 'string') {
            throw Error("Tag name must be a string!");
            // on "lève" une erreur => ça arrête tout !
        }
        this.name = data.name;
        */

        //---- choix en deportant la fonction dans une classe "static" (qui ne crer pas d'objet)
        // mais qui permet d'acceder a des methodes statique
        if(data)
        {
            this.name = CheckData.String(data.name);
        }
        
    }

    static GetAll(callback)
    {
        // requete :

        client.query('SELECT * FROM level', (err, results) => {

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
                // une moins un contenu
                // on organise un tableau de reponse

                let levels = [];

                for (let data of results.rows)
                {
                    levels.push(new Level(data));
                }

                callback(null, levels);
            }


        });

    }

    static GetOne(id, callback)
    {
        // notre requete dynamique
        const query = {
            text: `SELECT * FROM "level" WHERE id=$1`,
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
                let level = new Level(result.rows[0]);
                return callback(null, level);
            }

        });

    }

    //ajouter une donnée dans la base (insert)

    
    insert(callback)
    {
        // insersion dans une table avec une valeur dynamique
        const query = {
            text: ` INSERT INTO "level" ("name") 
                    VALUES ($1) 
                    RETURNING "id"`,
            values: [this.name]
        };

        client.query(query, (err, result) => {
            // gestion de l'erreur
            if (err) {
              return callback(err, null);
            }

            // gestion du resultat

            if (!result.rowCount) {
                // pas de reour = probleme quelque part,
                // il faut appeler les internets au secours.
                return callback('Insert did not return any id.', this);
            }

            // le resultat et ok

            console.log("return :",  result.rows[0].id);
            
            // BUG to do a debuguer 

            //this.id = result.rows[0].id;

            //return callback(null, this);

        });

    }
    
    //modifier une donnée dans la base (update)
    

    update(callback) {
        const query = {
            text: ` UPDATE "level" SET 
                    "name" = $1
                    WHERE "id" = $2`,
            values: [this.name, this.id]
        }

        client.query(query, (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (!result.rowCount) {
            return callback('Update did not target any rows', this);
        }

        // au moins une ligne a été modifié => tout va bien !
        return callback(null, this);
        });
    }

    delete(callback) {
        const query = {
            text: `DELETE FROM "level" WHERE id=$1`,
            values: [this.id]
        };

        client.query(query, (err, result) => {

        if (err) {
            return callback(err, null);
        }

        if (!result.rowCount) {
            return callback('Delete did not target any rows', this);
        }

        // au moins une ligne a été supprimé => tout va bien !
        return callback(null, true);
        });
    };
    //supprimer une donnée dans la base (delete)

}

module.exports = Level;
