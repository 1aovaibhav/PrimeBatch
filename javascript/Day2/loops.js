// const arr=["vaibhav","kumar","is","my"]

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
    
// }
// for(let i in arr){
//     console.log(arr[i]);
// }
// for(let i of arr){
//     console.log(i);
// }

const username="vaibhav";
const subject=prompt("enter no. of subjects");
const sname=[];
const smarks=[];
for (let index = 0; index < subject; index++) {
  let t1= prompt("enter subject name");
  let t2 =  prompt("enter marks");
   sname.push(t1);
   smarks.push(t2);
}
let avg=0;
let marks=0;
let ind=-1;
for (let index = 0; index < subject; index++) {
    avg+=parseInt(smarks[index]);
    if(smarks[index]>marks){
        marks=smarks[index];
        ind=index;
    } 
    
}
console.log((avg/parseInt(subject))*100);
console.log(sname[ind], marks);
