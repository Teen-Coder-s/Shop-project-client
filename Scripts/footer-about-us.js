let btn = document.querySelector(".showMeMore")
let aboutUs = document.querySelector(".footer__aboutUs")

btn.addEventListener("click" , e => {
    if (aboutUs.classList.contains("show")) {
        aboutUs.classList.remove("show")
        btn.textContent = "مشاهده بیشتر"
    } else {
        aboutUs.classList.add("show")
        btn.textContent = "مشاهده کمتر"
    }
})