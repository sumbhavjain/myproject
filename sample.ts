function sum(a,b){
     return a+b
     }

     console.log(sum(5,23))

     // isme person sirf string type ka hoga
    //  function greeter(person:string){
    //      return "hello," + person
    //  }

    //  let user='hello'
    //  console.log(greeter(user))


     function initials_name(str:string){
        var array=str.split(' ');
        var firstChar:string=array[0].charAt(0)
        var secondChar:string=array[1].charAt(0)
        console.log(firstChar.toUpperCase() + secondChar.toUpperCase())
    }
    initials_name("sambhav jain")

    //new data type....tuple
    //tuple is used to restrict the order in an array
    let x: [string,number];
    x = ['heee',1233]
    console.log(x)