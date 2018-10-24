class Animal {
    constructor(_name, _numberOfLegs) {
        this.name = _name,
            this.numberOfLegs = _numberOfLegs


    }
}
let animalName = ["Dogs", "Octopus", "Kangaroo", "Dolphin", "Iguana", "Starfish", "Centipede"]
let amountOfLegs = [4, 8, 2, 0, 4, 5, 100]

let animals = []

let dog = new Animal(animalName[0], amountOfLegs[0])
let kangaroo = new Animal(animalName[2], amountOfLegs[2])

for (i in animalName) {
    animals.push(new Animal(animalName[i]), amountOfLegs[i])
}

class Person {
    constructor(_favoriteColors) {
        this.favoriteColors = _favoriteColors
    }
    sayFavoriteColors() {
        for (i = 0; i < this.favoriteColors.length; i++) {
            console.log(this.favoriteColors[i].name)
        }
        for (var i in this.favotitesColors) {
            console.log(this.favoriteColors[i].name)
        }
    }
}
