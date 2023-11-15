const client = require('./database');
const Level = require('./models/level');

class DataMapper  {

    // le data mapper distribue des objets representant les entités de maniere autonome

    // fonction pour recevoir des data de la bdd

    static GetAllLevels(callback)
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

    static GetOneLevel(id, callback)
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
    
    //static ImportLevel(callback)

    //static UpdateLevel(callback)
    
    //static DeleteLevel(callback)


    //static GetAllUsers(callback)
    
    //static GetOneUsers(callback)
    
    //static ImportUser(callback)

    //static UpdateUser(callback)
    
    //static DeleteUser(callback)


    //static GetAllUsers(callback)
    
    //static GetOneUsers(callback)
    
    //static ImportUser(callback)

    //static UpdateUser(callback)
    
    //static DeleteUser(callback)


    //static GetAllUsers(callback)
    
    //static GetOneUsers(callback)
    
    //static ImportUser(callback)

    //static UpdateUser(callback)
    
    //static DeleteUser(callback)


    //static GetAllUsers(callback)
    
    //static GetOneUsers(callback)
    
    //static ImportUser(callback)

    //static UpdateUser(callback)
    
    //static DeleteUser(callback)


    //static GetAllUsers(callback)
    
    //static GetOneUsers(callback)
    
    //static ImportUser(callback)

    //static UpdateUser(callback)
    
    //static DeleteUser(callback)

    
}

module.exports = DataMapper;