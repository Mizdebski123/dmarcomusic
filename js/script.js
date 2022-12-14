let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("white");

    if (body.classList.contains("white")) {

        themeName.innerText = "White";

    } else {
        themeName.innerText = "Dark";
    }
});