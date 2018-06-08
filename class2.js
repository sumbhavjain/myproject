//to find length function
var strVar= 'any string'
console.log(typeof strVar)
console.log(strVar.length)

//string object..acquire more memory kyuki constructor or baaki functions call ho jate h
var newStr= new String('abc')
console.log(typeof newStr)
console.log(newStr.length)

//string as an array
var Str=['a','b','c','d']
console.log(Str[1])

//concatenation of string
function joinStr(para1, para2){
    if((typeof para1==typeof para2) && (typeof para1== 'string')){
    return para1+para2
    }
    else{
        return false
    }
}
console.log(joinStr('abc','abc'))
console.log(joinStr('ac',123))

//fnc to split name using split
function split_name(str2){
    var array=str2.split(' ');
    console.log('First Name: ' + array[0])
    console.log("Last Name: " + array[1])
}
split_name("sambhav jain")

//fnc to write initials of  a name
function initials_name(str){
    var array=str.split(' ');
    firstChar=array[0].charAt()
    secondChar=array[1].charAt()
    console.log(firstChar.toUpperCase() + secondChar.toUpperCase())
}
initials_name("sambhav jain")


console.log(Number.parseFloat('197.787865'))
console.log(Number.parseInt('197.75'))

//random number generation method
var a=Math.random()
var b=Math.random()
var c=Math.random()
console.log(Number.parseInt(a*1000))
console.log(Number.parseInt(b*1000))
console.log(Number.parseInt(c*1000))

// object creation
var newCar=new Object()
newCar.name='Honda'
newCar.engine='v8'
newCar.year='2018'

console.log(newCar)

//using for in loop to print content of an object
for(runner in newCar){
    console.log(runner +': '+ newCar[runner])
}

//to print all keys of an object
console.log(Object.keys(newCar))

//to create object without using new keyword...more readable method
var obj1={name: 'sambhav',
class:'btech',
college: "piet"
};

console.log(obj1)