// const arr = [{name:"vaibhav",city:"Delhi",id:0},
//     {name:"aryan",city:"Delhi",id:1},
//     {name:"adi",city:"Luck",id:2},
//     {name:"naman",city:"Mumbai",id:3},
// ]

// const root = document.getElementById('root');

// const deleteCard=(e,eleId)=>{
//     //one way to delete - 
//    // e.target.parentElement.remove();
//     const index = arr.findIndex((ele)=>ele.id==eleId);
//     arr.splice(index,1)
//     showcard(arr);
            
// }


// const showcard = (data) =>{
//     root.innerHTML = ``;
//     data.forEach((ele,idx)=>{
//         const card = document.createElement("div");
//         card.className="card";

        
//         card.innerHTML = `
//         <h4>${ele.name}</h4>
//         <p>${ele.city}</p>
//         <button onclick="deleteCard(event,${idx})">Delete</button>
//         `
//         root.appendChild(card);
//     })
// }

// const handleSelect = (e)=>{
//     // const val = document.getElementById("sel").value;
//     const val=  e.target.value;
//     if(val=="selectone") return showcard(arr);
//     const newData = arr.filter((ele)=>{
//         if(ele.city === val) return true;
//         return false;
//     })
//     showcard(newData);
// }
// showcard(arr);


    const arr = [
        {name: "vaibhav", city: "Delhi", id: 1, email: "vaibhav@example.com"},
        {name: "aryan", city: "Delhi", id: 2, email: "aryan@example.com"},
        {name: "adi", city: "Luck", id: 3, email: "adi@example.com"},
        {name: "naman", city: "Mumbai", id: 4, email: "naman@example.com"}
    ];
    


const root = document.getElementById('root');

const deleteCard = (e, eleId) => {
    const index = arr.findIndex((ele) => ele.id === eleId);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    let val = document.getElementById("sel").value;
    if (val === "selectone") return showcard(arr);
    
    const newData = arr.filter((ele) => ele.city === val);
    showcard(newData);  
};

const showcard = (data) => {
    root.innerHTML = ``;
    data.forEach((ele) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        <h4>${ele.name}</h4>
        <p>${ele.city}</p>
        <button onclick="deleteCard(event, ${ele.id})">Delete</button>
        `;
        root.appendChild(card);
    });
};

const handleSelect = (e) => {
    const val = e.target.value;
    if (val === "selectone") return showcard(arr);
    
    const newData = arr.filter((ele) => ele.city === val);
    showcard(newData);
};

const handleFormSubmit = (e)=>{
    e.preventDefault();
    // console.log(e);
    //console.log(e.target[0].value);
    // console.log(e.target.email.value);
  
    let flag=true;
    arr.forEach((ele)=>{
        if(ele.email == e.target[0].value){
            flag=false;
        
        }
    })
    if(flag==false){
        alert("email already present");
        return;
    }
    arr.push({name:e.target[1].value,city:e.target[2].value,email:e.target[0].value});
   showcard(arr);
}

showcard(arr);
