const { Client } = require('pg');


// normalement dans un fichier "ENV" 
// envirennement pour deciser de ladresse de connexion
// selon si on est en dev(bdd local) ou en prod

let connexion = "postgres://oquiz:oquiz@localhost/oquiz";

const client = new Client(connexion); //process.env.PG_URL


// on connecte le client
client.connect();

// on exporte le client déjà connecté
module.exports = client;