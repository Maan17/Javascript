//classes in Javascript
class Player{
    //creating properties for player object
    constructor(name,type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi, I am ${this.name}, I'am a ${this.type}`);
    }
}

//inheritance
class Wizard extends Player{
    constructor(name, type){
        //calling constructor function of parent class
        super(name, type)
    }
    play(){
        console.log(`WEEEEE I'am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');