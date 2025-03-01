let temp=true; //sidebar is shrinked
const handleSidebar = ()=>{
  if(temp==true){
    const aside = document.querySelector("aside");
    aside.style.alignItems = "start";
    aside.style.width = "10rem";
    const sidebar=document.querySelector(".container");
    sidebar.style.gridTemplateColumns = "10rem auto";
    const ab = document.querySelectorAll(".side-href");
    ab.forEach((ele)=>{
      ele.style.flexDirection = "row";
      ele.style.gap="1.5rem";
      ele.children[1].style.fontSize = "1rem"
    })

    temp=false;
  }

  else{

    const aside = document.querySelector("aside");
    aside.style.alignItems = "center";
    aside.style.width = "4.6rem"
    const sidebar=document.querySelector(".container");
    sidebar.style.gridTemplateColumns = "4.5rem auto";
    const ab = document.querySelectorAll(".side-href");
    ab.forEach((ele)=>{
      ele.style.flexDirection = "column";
      ele.style.gap="7px";
      ele.children[1].style.fontSize = "0.8rem"
    })
    temp=true;
  }
}

const historyText  = localStorage.getItem("yt_history");
const historyArray = historyText? JSON.parse(historyText):[];
const root = document.querySelector(".history-container")
root.innerHTML=``;
historyArray.forEach((video)=>{
    const newcard  = document.createElement('div');
    newcard.className="history-ele"
    
    newcard.innerHTML = `
        <div class="card-img">
            <img src='${video.img}' alt="cannot load" height="100%" width="100%">
        </div>
        <div class="card-text">
            <h3>${video.title}</h3>
            <h4>${video.author}</h4>
            <p>${video.desc}</p>
        </div>
    `;
    root.appendChild(newcard);     
})

const clearHistory = () =>{
    localStorage.removeItem("yt_history");
    root.innerHTML=``;
}