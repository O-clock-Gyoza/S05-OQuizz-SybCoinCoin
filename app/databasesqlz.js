const {Sequelize} = require('sequelize'); // require la lib de sequelize

let connexion = "postgres://oquiz:oquiz@localhost/oquiz"; // url de connexion


const sequelize = new Sequelize(
    
    connexion,
    {
        //option sequelize on ajoute les propriété commune
        define: 
        {
            updatedAt: 'updated_at',
            createdAt: 'created_at'
        }

    }

);

module.exports = sequelize;