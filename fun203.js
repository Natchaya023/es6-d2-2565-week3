//Declaration function
function addPure(a, b) {
    return a + b
}
//Call function
let sum = addPure(1,6)
//console.log(sum)

let b = 7 //Global variable
function sideffect(a){
    return `${a + b}` //Locall variable
}

let sum2 = sideffect(1)
console.log(sum2)