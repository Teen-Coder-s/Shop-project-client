let countValueSeconds = document.querySelector("#countValueSeconds");
let countValueMinutes = document.querySelector("#countValueMinutes");
let countValueHours = document.querySelector("#countValueHours");

function numberToPersian(number) {
    const persian = { 0: "۰", 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 
    8: "۸", 9: "۹" };
    number = number.toString().split("");
    let persianNumber = ""
    for (let i = 0; i < number.length; i++) {
         number[i] = persian[number[i]];
    }
    for (let i = 0; i < number.length; i++) {
         persianNumber += number[i];
    }
    return persianNumber;
}


setInterval(() => {

    let time = new Date("February 08, 2022 10:00:00").getTime();
    let now = new Date().getTime();
    let distance = time - now;

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countValueHours.textContent = numberToPersian(hours);
    countValueMinutes.textContent = numberToPersian(minutes);
    countValueSeconds.textContent = numberToPersian(seconds);

    if(hours < 0) {
        time = new Date().getTime() + 86400605;
    }
}, 1000);