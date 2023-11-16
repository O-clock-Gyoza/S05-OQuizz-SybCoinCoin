//test de la classe Level

//const Level = require('./app/models/level');
/*
// fausse data
data = {

    id :3,
    name :"dfsdf",
    created_at:5457587757,
    updated_at:5457587757

}

let level = new Level(data);

console.log(level.id);
console.log(level.name);
console.log(level.createdAt);
console.log(level.updatedAt);

level.name = "poil au pattes";

*/

//test de notre micro Datamapper
/*
const DataMapper = require('./app/dataMapper');


function callback (err,result)
{
    console.log("nresult:", result.length);
    console.log(result);
}

DataMapper.GetAllLevels(callback);

*/

//test de notre active record

/*
const Level = require("./app/models/level");

function callback (err,result)
{
    //console.log("nresult:", result.length);
    console.log(result);
    console.log("------------- end of request");
}

Level.GetAll(callback);
*/
//-----



let newLevelEntry = new Level();
newLevelEntry.name = "plus ultra";
newLevelEntry.insert(callback);


// je regarde le resultat
Level.GetAll(callback);
