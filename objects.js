
const DiceRoll = {
    D6() {
        console.log("testing the D6")
        document.getElementById("randomNumber").innerHTML = Math.floor(Math.random() * 6 + 1)
    }
}

console.log("testing the page")
DiceRoll.D6()
