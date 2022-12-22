
{
    const toggleBackground = () => {
        const conatainer = document.querySelector(".container");
        const body = document.querySelector(".body");
        const list = document.querySelectorAll(".navigation__item--link");
        const button = document.querySelector(".container__button");
        const buttonName = document.querySelector(".nextColorName");



        body.classList.toggle("white");
        conatainer.classList.toggle("whiteBackground");
        list.forEach(linkcolor => {
            linkcolor.classList.toggle("whitelist");
        })
        button.classList.toggle("whiteButton");

        if (conatainer.classList.contains("whiteBackground")) {
            buttonName.innerText = "Dark";
        }else {
            buttonName.innerText = "White";

        }



    }

    const init = () => {
        const changeBackgroundButton = document.querySelector(".container__button");
        changeBackgroundButton.addEventListener("click", toggleBackground);
    }
    init();
}






