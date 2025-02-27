//function declaration -> we can use it before declaration or make 2 function with same name
// print("vaibhav")
// function print(a){
//     console.log(a);
// }

//function assignment -> we cannot use it before declaration or make 2 function of same name
// const view = function printX(a){
//     console.log(a);
// }
// printX("kumar") //this will give error
// const view = function (a){
//     console.log("Hello", a);
// }

// arrow function
const view = (a) => {
    console.log("Hello" , a);
}
view("vaibhav");
//declaration method
// function calc(a,b){
//     return (a+b)%10;    
// }
// console.log(calc(20,2));

//anonymous function
// const calc = function (a,b){
//     return (a+b)%10;
// }
// console.log(calc(20,2));

//arrow function
// const calc = (a,b) =>{
//     return (a+b)%10;
// }
// console.log(calc(33,10));

//short for one liner
const calc = (a,b) => (a+b)%10;
console.log(calc(4,1));



