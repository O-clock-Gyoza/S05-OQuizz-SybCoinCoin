const CoreModel = require("./coreModel");

// en etendant CoreModel, user acquiert toutes les composantes
// de CoreModel (les propriété et les methodes)

class User extends CoreModel
{

    static tablename = "user";

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


    static GetAll(callback)
    {
        // requete :

        client.query('SELECT * FROM "user"', (err, results) => {

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

                let users = [];

                for (let data of results.rows)
                {
                    users.push(new User(data));
                }

                callback(null, users);
            }


        });

    }

    static GetOne(id, callback)
    {
        // notre requete dynamique
        const query = {
            text: `SELECT * FROM "user" WHERE id=$1`,
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
                let user = new Level(result.rows[0]);
                return callback(null, user);
            }

        });

    }

    //ajouter une donnée dans la base (insert)

    
    insert(callback)
    {
        // insersion dans une table avec une valeur dynamique
        const query = {
            text: ` INSERT INTO "user" ("email","password","firstname","lastname") 
                    VALUES ($1,$2,$3,$4) 
                    RETURNING "id"`,
            values: [this.email, this.password, this.firstname, this.lastname ]
        };

        client.query(query, (err, result) => {
            // gestion de l'erreur
            if (err) {
              return callback(err, null);
            }

            // gestion du resultat

            if (!result.rowCount) {
                // pas de retour = probleme quelque part,
                // il faut appeler les internets au secours.
                return callback('Insert did not return any id.', this);
            }

            // le resultat est ok
            
            this.id = result.rows[0].id;

            return callback(null, this);

        });

    }
    
    //modifier une donnée dans la base (update)
    

    update(callback) {
        const query = {
            text: `UPDATE "user" SET 
            ("email", "password", "firstname", "lastname") = ($1, $2, $3, $4) WHERE id=$5`,
            values: [this.email, this.password, this.firstname, this.lastname , this.id]
        }

        client.query(query, (err, result) => {

            if (err) {
                return callback(err, null);
            }

            // l'id n'a pointer null part
            if (!result.rowCount) {
                return callback('Update did not target any rows', this);
            }

            // au moins une ligne a été modifié => tout va bien !
            return callback(null, this);

        });
    }

    delete(callback) {
        const query = {
            text: `DELETE FROM "user" WHERE id=$1`,
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

module.exports = User;