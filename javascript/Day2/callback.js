// const sum = (a,b) =>{
//     const ans=a+b;
//     return ans;
// };
// const printPretty = (txt) =>{
//     console.log("--------------");
//     console.log(txt);
// };
// printPretty(sum(20,20)); //this is not callback

//sum is a higher order function - function that accepts another function as parameter
// const sum = (a,b,c) =>{
//     const ans=a+b;
//     c(ans);
// };
//here printPretty is a callback function
// sum(10,32,printPretty); //this is callback


// const str1="vaibhav"
// const str2="kumar"
// console.log(str1+" "+str2);
// console.log(`${str1} ${str2}!`)

const metaData = () =>{
    const n=prompt("enter your name");
    console.log("hello ",n);
    const numOfSub = parseInt(prompt("enter no. of subject"));
    return numOfSub;
}




const getSubjects = (num) =>{
    const record= {};
    for(let i = 0; i < num; i++){
       
        const subname = prompt(`enter name of subject ${i+1}`);
        const marks = parseInt(prompt( `enter marks for subject ${i+1}`));
        record[subname]=marks;
    }
    return record;
}

const getPercentage = (record) =>{
    const marks= Object.values(record);
    let s = marks.length;
    let ans=0;
    // const sum = (a) =>{
    //     ans+=a;
    // }
    // marks.forEach(sum);
    marks.forEach((a)=>{
        ans+=a;
    })
    return (ans/(s*100))*100;
}

const getBestSubject = (record)=>{
const arr=Object.entries(record);
let m=0;
let sub="";
for(let i=0;i<arr.length;i++){
if(arr[i][1]>m){
    m=arr[i][1];
    sub=arr[i][0];
}
}
console.log(sub)
}

const getGrades = (percentage) =>{
    const grades = [
        [60,'D'],
        [70,'C'],
        [80,'B'],
        [90,'A']     
        
    ]
    
    let grad = "F";
    grades.forEach((arr)=>{
        if(percentage >= arr[0]){
            grad=arr[1];
        }
    })
    console.log(grad);
}

const num = metaData();
const record=  getSubjects(num);
const percentage = getPercentage(record);
console.log(percentage);
console.log(getBestSubject(record))
getGrades(percentage);