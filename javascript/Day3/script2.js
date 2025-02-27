
const arr = [{name:"vaibhav",city:"bijnor",email:"xyz@gmail.com"},
    {name:"aryan",city:"odissa",email:"aryan@gmail.com"},
    {name:"adi",city:"lucknow",email:"adi@gmail.com"},
]

const handleFormSubmit = (e)=>{
    e.preventDefault();
    console.log(e);
    //console.log(e.target[0].value);
    // console.log(e.target.email.value);
    arr.forEach

    arr.push({name:e.target[1].value,city:e.target[2].value,email:e.target[0].value});
    console.log(arr);
}