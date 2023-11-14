
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

class OldCheval
{

    #sound;
    #type = "cheval";

    constructor(soundValue)
    {
        this.#sound = soundValue;
    }

    start() { console.log(this.#sound);}

    get type() {return this.#type; }

}




//---------------------------------------------------

class Vehicule
{
    #sound;
    #type;

    constructor(soundValue)
    {
        this.#sound = soundValue;
    }

    start() { console.log(this.#sound);}

    get type() {return this.#type; }

}


class Voiture extends Vehicule
{
    #type = "voiture";

    constructor()
    {
        super("tututu !");
    }

}



class Cheval extends Vehicule 
{
    #type = "steak";

    constructor()
    {
        super("hIIIhuuhHUHUhhHUuu");
    }

}


let voiture = new Voiture("tutut");
let cheval = new Cheval("hihhuhuhuuhuhu");

voiture.start();

cheval.start();

console.log(voiture.type, cheval.type);


