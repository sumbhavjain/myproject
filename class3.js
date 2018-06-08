// another example of for-in loop

//object creation (not a suitable method....readability kharab ho jati h)
var newStud=new Object()
newStud.name='Honda'
newStud.college='piet'
newStud.batch='2015-19'

for(access in newStud){
    console.log(access + ': ' + newStud[access])
}

//functional prototyping ke through object create krte h (Most general way)
// example 
function car(make, model, year){
    this.make=make;
    this.model=model;
    this.year=year;
}

var kenscar=new car('Nissan', '200XZ', 1992);
var dvscar=new car('Mazda', 'Miata', 1995);
console.log(kenscar,dvscar)

// to introduce new property in existing class during run-time
kenscar.color= 'White'
console.log(kenscar,dvscar)

//to add functions in object
function car_fnc(make, model, year){
    this.make=make;
    this.model=model;
    this.year=year;
    this.getMake= function(){
        return this.make
    };
    this.setMake= function(){
        this.make= make;
        return make
    }
}

console.log(car_fnc.getMake)
console.log(car_fnc.setMake)

// to delete a property in existing class during run-time

delete kenscar.color
console.log(kenscar)
console.log(Object.keys(kenscar))

// triple equals type checking and content checking dono krta h
// double equal bs content checking krta h
if(123 === "123")
    console.log('i am true')
else
    console.log("I am false")    

// triple equal example
var fruit= {name: "apple"};
var fruitbear= {name: "apple"};
fruit==fruitbear // return false
fruit===fruitbear // return false

// two variable, a single object
var fruit = {name: "apple"};
var fruitbear= fruit; // assign fruit object reference to fruitbear
fruit==fruitbear  //return true
fruit=== fruitbear // return true


// getter and setter
var o = {
    a: 7,
    get b(){
        return this.a+1;
    },
    set c(x){
        this.a=x/2;
    }
};

console.log(o.a) //7
console.log(o.b) //8
o.c=50
console.log(o.a) //25



