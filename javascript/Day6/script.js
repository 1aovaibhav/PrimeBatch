const getData = (text) =>{
    const pr = fetch(`https://dummyjson.com/recipes/search?q=${text}`);
    pr.then((res)=>{
        const pr2 = res.json();
        pr2.then((data)=>{
            showCards(data.recipes);
        })
    })
}

const showCards = (dataArr) =>{
    const root = document.getElementById("cards-container")
    root.innerHTML=``;
    dataArr.forEach((ele)=>{
        
        const newDiv= document.createElement("div");
        newDiv.className = "card";
        newDiv.innerHTML = `
        <H4>${ele.name}</H4>
        <img src = "${ele.image}" height="250px" >
        <p>${ele.cuisine}</p>
        `
        root.appendChild(newDiv);
    })
}
let timeoutID=null;
const handleSearch = (e)=>{
    if(timeoutID){
        clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(()=>{
        getData(e.target.value);
    },1000);
};