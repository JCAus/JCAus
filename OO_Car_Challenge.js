//Part 1
class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        console.log("BEEP!");
    }
    toString(){
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`);
    }
}

//Part 2
class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

//Part 3
class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        console.log('VROOOM!!!');
    }
}

//Part 4
class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            console.log('Only vehicles allowed in here');
        }
        if(this.vehicles.length >= this.capacity){
            console.log('Sorry no vacancy');
        }
        this.vehicles.push(newVehicle);
        console.log('Vehicle added');
    }
}