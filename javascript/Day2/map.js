const arr=[10,20,30]

const newArr = arr.map((a)=>{
    return a*2;
})

console.log(newArr)

//reduce - important

const ans = arr.reduce((acc,ele)=>{
    return acc+ele;
})
console.log(ans);

const newArray = arr.reduce((acc,ele)=>{
    acc.push(ele*2);
    return acc;
},[]);
console.log(newArray);
