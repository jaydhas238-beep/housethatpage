
/*====================================
HOUSETHAT POPUP
====================================*/

const popup=document.getElementById("popupOverlay");
const closeBtn=document.getElementById("popupClose");

/* Show after 8 seconds */

if(!sessionStorage.getItem("popupShown")){

setTimeout(()=>{

popup.classList.add("show");

sessionStorage.setItem("popupShown","true");

},8000);

}

/* Close */

closeBtn.addEventListener("click",()=>{

popup.classList.remove("show");

});

/* Click outside */

popup.addEventListener("click",(e)=>{

if(e.target===popup){

popup.classList.remove("show");

}

});

/* ESC */

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

popup.classList.remove("show");

}

});
