// function sum(a,b){
//     return a+b
// }
// // equivalent arrow function will be - mous function
// // this is anony
// var sumNew = (a,b) => {return a+b;}
// console.log(sumNew(5,43))

function a(fncsum){
    var a= fncsum(25)
    console.log(a)
}

var fncsum= function(para1){
    var bee=para1+2
    return bee
}

a(fncsum)

