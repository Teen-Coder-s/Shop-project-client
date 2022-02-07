const swiper = new Swiper('.swiper-header', {
    loop: true,
    lazy: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    },
    effect: "fade",
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

const offroozSwiper = new Swiper('.swiper-offrooz', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  lazy: true,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  keyboard: {
      enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const selectedSliderSwiper = new Swiper('.swiper-selected', {
  effect: "fade",
  loop: true,
  lazy: true,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
});

// let slideIndex = 0
// let timer = 1000

// let slides = document.querySelectorAll(".slide")
// let prev = document.querySelector(".prev")
// let next = document.querySelector(".next")
// let points = document.querySelectorAll(".point")

// function classswitcher() {
//     slides.forEach(slide => slide.classList.remove("show"))
//     slides[slideIndex].classList.add("show")
//     points.forEach(point => point.classList.remove("show"))
//     points[slideIndex].classList.add("show")
// }
// let goNext = () => {
//     slideIndex = (slideIndex == slides.length-1) ? 0 : slideIndex+1
//     classswitcher()
// }

// let goprev = () => {
//     slideIndex = (slideIndex == 0) ? slides.length-1 : slideIndex-1
//     classswitcher()
// }

// let runSlides = setInterval (
//     goNext , timer
// )

// points.forEach((point , index) => {
//     point.addEventListener("click" , e => {
//         index = picIndex 
//         if (point.classList.contains("show")){
//             point.classList.remove("show")
//         } else {
//             point.classList.add("show")
//         }
//     })
// })


// let pictures = ["./Images/Thumbs/0362360_slider-5-desk.jpeg", "./images/Thumbs/0362357_slider-4-desk.jpeg", "./images/Thumbs/0362356_slider-3-desk.jpeg", "./images/Thumbs/0362353_slider-2-desk.jpeg", "./Images/Thumbs/0362557_slider-1-desk-min.jpeg"]
// let picIndex = 1
// let slidePic = document.querySelector("#slide__pic")
// let points = document.querySelectorAll(".point")

// function goNext() {
//     if (picIndex < pictures.length) {
//         slidePic.src = pictures[picIndex]
//         picIndex += 1
//     } else {
//         slidePic.src = pictures[0]
//         picIndex = 1
//     }

//     points.forEach(point => {
//         point.classList.remove("show")
//         points[picIndex-1].classList.add("show")
//     });
// }

// let runSlides = setInterval(() => {
//     goNext()
// }, 3000);

// slidePic.addEventListener("mouseover" , e => clearInterval(runSlides))
// slidePic.addEventListener("mouseleave" , e => runSlides = setInterval (goNext , 3000))
