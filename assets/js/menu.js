const menuOpener = document.getElementById("menuOpener")
const menu = document.getElementById("menu")

menuOpener.addEventListener("click",()=>{
    menu.classList.toggle("openMenu")
})