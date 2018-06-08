// array
var arrayOne= [123,453,'hii','heellooo',false,"Shukran",2334.434,989.4453,1222,true,[1233,3423],{name: 'sambhav'}]
console.log(arrayOne)
console.log(arrayOne[1])
console.log(arrayOne[2])
console.log(arrayOne[4])
console.log(arrayOne[6])
console.log(arrayOne[11])
console.log(arrayOne[10])

arrayOne[11]='Changed value'
console.log(arrayOne)

arrayOne[10.1]=656
console.log(arrayOne)

//using forEach function...used for looping
arrayOne.forEach(function(item, index, array){
    console.log(item + ": " +  index);
});

// find function
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found)

// filter fnc
var words= ['spray','present','2313','5645','priya']; // all should be string.otherwise won't work
var prregexp= /pr/;
const result= words.filter(word => word.match(prregexp))
console.log(result)
