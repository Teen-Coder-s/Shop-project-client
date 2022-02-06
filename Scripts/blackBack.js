let searchInput = document.querySelector(".search_input")
let searchIcon = document.querySelector("#search_icon")
let blackBack = document.querySelector(".black__back")
searchInput.addEventListener("click" , e => {
    blackBack.classList.add("show")
}) 
searchIcon.addEventListener("click" , e => {
    blackBack.classList.remove("show")
}) 
blackBack.addEventListener("click" , e => {
    blackBack.classList.remove("show")
}) 