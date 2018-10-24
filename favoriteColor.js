class Color{
    constructor(_name){
        this.name = _name
    }
}

let colors = [new Color("red"), new Color("blue"), new Color("green"), new Color("orange")];


let fred = new Person(colors);
console.log(fred.favoriteColors)

fred.sayFavoriteColors();
