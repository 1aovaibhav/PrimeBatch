console.log("start");
const handleInnerCall = ()=>{
    console.log("Step Y");
};

const handleCall = ()=>{
    console.log("Step M");


    handleInnerCall();

    console.log("Step N");
}

//handleCall();
// setTimeout(handleCall,0); //time in millisecond

// handleInnerCall();
// console.log("end");

setTimeout(()=>{
    console.log("N");
    setTimeout(()=>{
        console.log("P")
    },0);
    handleInnerCall();
    console.log("b");
},5000);

console.log("end");