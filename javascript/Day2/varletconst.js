// var - function scope
//let and const - block scope

// const temp= ()=>{
//     if(true){
//         var username = "vaibhav"
//     }
//     console.log(username);
// }
// temp();
// console.log(username);

const mod = (a,b)=>{
    const ans= (a+b)%10;

    const write = (ans)=>{
        console.log(ans);
    }
    write(ans);
}
mod(8,9);