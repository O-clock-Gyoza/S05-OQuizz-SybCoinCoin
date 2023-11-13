//Programmation Orienté Objet

let object = {
    variable:10, // propriété
    methode: ()=>{ console.log("plop");}, // methode
}
/*
console.log(object.variable);
console.log(object.methode());
*/
//-------

let personA = {
    firstname:"Sylvain",
    lastname:"Briand",
    age:24
}

let personB = {
    firstname:"casimir",
    lastname:"desnuages",
    age:2413
}

//---------------

// la factory

function createPerson(firstNameValue, lastnameValue, ageValue)
{
    let objectARenvoyer = {
        firstname:firstNameValue,
        lastname:lastnameValue,
        age:ageValue
    }


    return objectARenvoyer;
}

let personC = createPerson("willy","Wonka",45);


console.log(personC.firstname, personC.lastname, personC.age);

let personD = {
    firstname:"Sylvain",
    lastname:"Briand",
    age:24,

    say: () => 
    {
        console.log("coin coin !")
    },

    methode: 
    function()
    { return "pout"; },

}

personD.say();

//-------------- la meme chose avec classe

// je ne suis pas un objet, je sert a en faire
class Person
{

    firstname; // parametre public > peut etre changer via l'instance
    #lastname;  // parametre privé > n'est pas accessible depuis l'instance(objet créé) seulement dans la class
    #age; // parametre privé > n'est pas accessible depuis l'instance(objet créé)

    constructor(firstnameValue, lastnameValue, ageValue)
    {
        this.firstname = firstnameValue;
        this.#lastname = lastnameValue;
        this.#age = ageValue;
    }

    // methode publique avec parametre
    coincoin(param) {

        this.#arrow(); // les methode de la classe peuvent utiliser les methode privé

        console.log("Coin coin Coin coin ! "+param+ " // "+this.#lastname);
    }

    //methode privé non accessibe en public, seulement dans la class
    // possiblité d'ecrire ses methode en fonction fleché
    #arrow = () => {
        console.log("Arrow Arrow Arrow Arrow Arrow !");
    }

    // permet de rendre accessible le parametre age en publique MAIS, on ne peut pas ecrire sa valeur car elle est privé
    get age() { return this.#age; }

}

let personClass = new Person("sarah","abidbol",25);

personClass.coincoin("POUET");
// pas accessible personClass.#arrow();

personClass.firstname = "TOTO"; // on peut modifié le parametre en public

console.log(personClass.firstname, personClass.lastname, personClass.age);

personClass.age = 12;

console.log("age", personClass.age);

/*

oui on peut produire en serie grace a de la data, c'est fait pour

let mesPersons = [];
for(let data of bigDatas)
{
    mesPersons.push(
        new Person(data.firstname, data.lastname, data.age)
    );
}

*/


