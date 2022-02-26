let dateDiv = document.querySelector("#date");
let hourSpan = document.getElementById("hour");
let minSpan = document.getElementById("min");
let secSpan = document.getElementById("sec");

setInterval(() => {
    let dateNow = new Date();
    dateDiv.innerText = dateNow.toDateString();
    hourSpan.innerText = dateNow.getHours();
    minSpan.innerText = dateNow.getMinutes();
    secSpan.innerText = dateNow.getSeconds();
}, 1000);