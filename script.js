let toggleBtn= document.getElementById("toggleBtn")
let section = document.querySelector("ul")
const toggleBtnB= document.getElementById("toggleBtnB")


toggleBtn.onclick=function(){
    section.classList.toggle("open")
}

toggleBtnB.onclick=function (){
    section.classList.toggle("active")
}
