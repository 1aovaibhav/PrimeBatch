
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

//get videoId
const iframe = document.querySelector('iframe')
// const [a, videoId] = window.location.search.split('=');
// iframe.src = `https://www.youtube.com/embed/${videoId}`

const videoData = JSON.parse(localStorage.getItem("videoData"));
const author = document.getElementById("author");
author.innerText= videoData.author;
const videoTitle = document.getElementById("videoTitle");
videoTitle.innerText = videoData.title;
iframe.src = `https://www.youtube.com/embed/${videoData.videoId}`






//comments logic




let id=videoData.videoId;



const commentBox  = document.querySelector(".comments");
commentBox.innerHTML=``;
let comments = localStorage.getItem(id);
if(comments){
    const newComments = JSON.parse(comments);
    newComments.forEach((ele)=>{
        const newPara = document.createElement('p');
        newPara.className="paratext";
        newPara.innerText=ele;

        commentBox.appendChild(newPara);
    })
}



const addComment = () =>{
    
    
    const cmmnt = document.querySelector(".comment-input").value;
    if(cmmnt!==""){
        if(!comments){
            const newComments = [];
            
            newComments.push(cmmnt);
            localStorage.setItem(id,JSON.stringify(newComments));
        }
        else{
            const newComments = JSON.parse(comments);
           
            newComments.push(cmmnt);
            localStorage.setItem(id,JSON.stringify(newComments));
        }
    }
    comments = localStorage.getItem(id);

commentBox.innerHTML=``;
if(comments){
    const newComments = JSON.parse(comments);
    newComments.forEach((ele)=>{
        const newPara = document.createElement('p');
        newPara.className="paratext";
        newPara.innerText=ele;

        commentBox.appendChild(newPara);
    })
}
        
}

const clearComments = () =>
{
    localStorage.removeItem(id);
    commentBox.innerHTML=``;
    comments=null;
}


// const youtubeHistory = localStorage.getItem('yt_history');
// if(!youtubeHistory){
//     const newHistory = new Set();
//     newHistory.add(videoId);
//     localStorage.setItem("yt_history",JSON.stringify([...newHistory]));
// }
// else{
//     const newHistory = new Set(JSON.parse(youtubeHistory));
    
//     newHistory.add(videoId);
//     localStorage.setItem("yt_history",JSON.stringify([...newHistory]));
// }


const youtubeHistory = localStorage.getItem('yt_history');

if (!youtubeHistory) {
    const newHistory = [{ id: videoData.videoId, title: videoData.title, author: videoData.author, desc: videoData.description, img:videoData.videoThumbnails[0].url}]; // Store only necessary fields
    localStorage.setItem("yt_history", JSON.stringify(newHistory));
} else {
    let newHistory = JSON.parse(youtubeHistory);

    // Check if videoId already exists (compare by `id`)
    if (!newHistory.some(video => video.id === videoData.videoId)) {
        newHistory.push({ id: videoData.videoId, title: videoData.title, author: videoData.author, desc: videoData.description, img:videoData.videoThumbnails[0].url });
        localStorage.setItem("yt_history", JSON.stringify(newHistory));
    }
}


localStorage.removeItem("videoData");

