//Programmation Orienté Objet

// --------------------------------------------- OBJET VANILLA

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
// le but : produire des objet
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

// rappele, on peut mettre des methode aussi dans les objects
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


// --------------------------------------------- OBJET CLASSE

//-------------- la meme chose avec classe

// je ne suis pas un objet, je sert a en faire
class Person
{

    firstname; // parametre public > peut etre changer via l'instance
    #lastname;  // parametre privé > n'est pas accessible depuis l'instance(objet créé) seulement dans la class
    #age; // parametre privé > n'est pas accessible depuis l'instance(objet créé)


    //le constructeur, construit l'instance(objet)
    constructor(firstnameValue, lastnameValue, ageValue)
    {
        this.firstname = firstnameValue;
        this.#lastname = lastnameValue;
        this.#age = ageValue;
    }

    // méthode publique avec parametre
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

/*
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

/*
EXERCICE

une classe : Voiture

> parametre privé sound > string 

> methode start console.log(sound);

*/
//avant factorisation


class OldVoiture
{

    #sound;
    #type = "voiture";

    constructor(soundValue)
    {
        this.#sound = soundValue;
    }

    start() { console.log(this.#sound);}

    get type() {return this.#type; }

}


//---------------------------------------------------
// apres factorisation

// cette classe regroupe les points communs entre cheval et voiture
class Vehicule
{

    //static
    // static proprieté de classe , pas d'objet, 
    // s'apelle via Vehicule.VehiculesNum
    static VehiculesNum = 0;


    #sound;

    constructor(soundValue)
    {
        this.#sound = soundValue;

        Vehicule.VehiculesNum++; 
    }

    start() { console.log(this.#sound);}

}

// juste pour la voiture
class Voiture extends Vehicule
{
    #type = "voiture";

    constructor(soundValue)
    {
        super(soundValue);
    }

    get type() {return this.#type; }

}

// juste pour le cheval
class Cheval extends Vehicule
{ 
    static cavalierMonteNum = 0; // static proprieté de classe Cheval

    #type = "steak";
    #cavalier;

    constructor()
    {
        super("hIIIhuuhHUHUhhHUuu");
    }

    get type() {return this.#type; }


    // retourne la valeur, peut egalement faire des operation silencieuses
    get cavalier() { 

        return this.#cavalier; 
    }

    // setter permet, par exemple de faire des operation silencieuse
    // on peut par exemple en profiter pour verifié des donnée

    set cavalier(cavalierValue) { 

        Cheval.cavalierMonteNum++;
        this.#cavalier = cavalierValue;
    }

}

//-------------------------------

let voiture = new Voiture("pouet");
let voiture2 = new Voiture("tchoutchou");


let cheval = new Cheval();
console.log("cheval avant:",cheval.cavalier, Cheval.cavalierMonteNum);
// on set un cavalier su ce cheval
cheval.cavalier="zorro";
console.log("cheval apres:",cheval.cavalier, Cheval.cavalierMonteNum);

new Cheval();
new Cheval();
new Cheval();
new Cheval();
new Cheval();
new Cheval();

voiture.start();
voiture2.start();
cheval.start();

console.log(voiture.type, voiture2.type, cheval.type);
console.log("---------");
console.log("numVehicule :",Vehicule.VehiculesNum);



//----------