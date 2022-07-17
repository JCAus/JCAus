function makeNames(first, last){
    return {
        first,
        last,
    };
}

let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That's my favorite number!"
}

const instructor1 = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says Bye!";
    }
}

function createAnimal(species, action, sound){
    return {
        species,
        [action](){return sound;}
    };
}