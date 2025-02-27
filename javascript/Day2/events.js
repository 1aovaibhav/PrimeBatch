const arr = [{name:"vaibhav",city:"bijnor",email:"xyz@gmail.com"},
    {name:"aryan",city:"odissa",email:"aryan@gmail.com"},
    {name:"adi",city:"lucknow",email:"adi@gmail.com"},
]

const root = document.getElementById("parent");
const bdy = document.getElementsByTagName("body");
arr.forEach((ele)=>{
    const newCard = document.createElement('div');
    
    newCard.addEventListener("click",()=>{
        newCard.style.backgroundColor = getRandomColor();
    })

    newCard.className="card";
    newCard.innerHTML = `
    <h4>${ele.name}</h4>
    <h6>${ele.city}</h6>
    <p class="text" style="user-select:none;">${ele.email}</p>
    `;

    root.appendChild(newCard);
})

//event propogation -> 1. capturing phase 2. bubling phase

const changeBG = ()=>{
    console.log("button clicked");
    bdy[0].style.backgroundColor = getRandomColor();
}

const getRandomColor=()=>{
    const red = Math.floor(Math.random()*255); 
    const green = Math.floor(Math.random()*255); 
    const blue = Math.floor(Math.random()*255); 
    return `rgb(${red},${green},${blue})`;
}

const t = document.querySelector(".text");
t.addEventListener("click",(event)=>{
    t.style.backgroundColor= getRandomColor();

    event.stopPropagation()
})

const textChange = (e) =>{
    console.log(e);
}

const handleKeyDown = (e) =>{
    console.log(e);
    console.log("key down: ",e.target.value);
}
const handleKeyUp = (e) =>{
    console.log(e);
    console.log("key up: ",e.target.value);
}