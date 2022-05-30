for (var i = 1; i <= 12;i++) {
    // console.log("2 x " +i + " = " , 2 * i)
    console.log(`2 x ${1} + = ${2 * 1}`)
}

console.log("=======")

//for of
var num = [1,2,3,4,5,6,7,8,9,10,11,12]
for(var number of num){
    console.log(`3 x ${number} = ${3 * number}`)
}

//For in
function Mobile(){
    this.model = "Galaxy"
    this.Color = "white"
    this.Ram = "4GB"
}

let Sumsung = new Mobile()
for(let props in Sumsung ){
    console.log(`${props} : ${Sumsung[props]}`)
}
