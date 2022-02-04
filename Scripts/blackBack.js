let searchInput = document.querySelector(".search_input")
let searchBtn = document.querySelector(".search_button")
let blackBack = document.querySelector(".black__back")
searchInput.addEventListener("click" , e => {
    if (blackBack.classList.contains("show")){
        blackBack.classList.remove("show")
    } else {
        blackBack.classList.add("show")
    }
}) 
searchBtn.addEventListener("click" , e => {
    blackBack.classList.remove("show")
}) 
blackBack.addEventListener("click" , e => {
    blackBack.classList.remove("show")
}) 