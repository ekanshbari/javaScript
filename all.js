
// Spread Syntax (...)

// function sum(x,y,z){
//     // console.log(x+y+z); // gives 6 and undefined with apply
//     return(x+y+z); // gives 6 with apply
// }

// var arr = [1,2,3];
// // sum(...arr);
// console.log(sum.apply(null,arr));

//------------------------------------------------------------------------------------------------------------------------------------------------------

function sum(x,y,z){
    console.log(x+y+z);
    
}

var arr = [1,2,3,4]; 
sum(...arr); //6 as it will pick first 3 arguments

//but if we reduce the array element and increase the function argument then it will give NaN
function sum1(x,y,z,a){
    console.log(x+y+z+a);
    
}

var arr1 = [1,2,3]; 
sum1(...arr1); //NaN

//------------------------------------------------------------------------------------------------------------------------------------------------------

var a = [1,2,3];
var b = ["ram","lakhan","sita"];
var num = 14;
console.log(...a,num);
console.log(...a,num,23,'Hello',2.002);  //array and string literal
console.log(...a,num,23,'Hello',2.002,...b);


//Syntax
/*
for function call : myFunc(...arg);
for object i.e key:value pair => let obj = {...objLiteral}
 */

 //------------------------------------------------------------------------------------------------------------------------------------------------------

/*  apply(): this is used where we want to pass elements of array in the function argument 
The apply() method accepts arguments in null and array :
*/

function myFunc(a,b,c){}
var c = [1,2,3];
myFunc.apply(null,c);

/*The Difference Between call() and apply()
The difference is:
The call() method takes arguments separately.
The apply() method takes arguments as an array.
The apply() method is very handy if you want to use an array instead of an argument list.
*/

// The apply() method accepts arguments in an array:
// var person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
//   var person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//  console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));

//   Compared with the call() method:

var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
//   console.log(person.fullName.apply(person1, "Oslo", "Norway"));  // TypeError: CreateListFromArrayLike called on non-object
console.log(person.fullName.call(person1, "Oslo", "Norway"));

//------------------------------------------------------------------------------------------------------------------------------------------------------
