"use strict"

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(createParagraph("Culinary wonders since 1901"));
    home.appendChild(createParagraph("Try our Vegan and non-Vegan dishes"));
    home.appendChild(createParagraph("Call, order online or visit us"))

    const homeImage = document.createElement("img");
    homeImage.src = "chef.jpg";
    homeImage.classList.add("main-image");
    homeImage.alt = "Dude vegetabling";

    home.appendChild(homeImage);

    home.appendChild(createParagraph("Best food and service in the county!"));

    return home;
}

function createParagraph(text) {
    const para = document.createElement("p");
    para.classList.add("home-text");
    para.innerText = text;

    return para;
}

function loadHome() {
    const main = document.getElementById("main");
    main.innerText = "";
    main.appendChild(createHome());
}

export default loadHome;