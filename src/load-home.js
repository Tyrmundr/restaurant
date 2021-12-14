"use strict"

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(createParagraph("Try our vegan dishes!"));
    home.appendChild(createParagraph("Established in 4 cities!"));
    home.appendChild(createParagraph("Order from the comfort of your home!"));

    return home;
}

function createParagraph(text) {
    const para = document.createElement("p");
    para.innerText = text;

    return para;
}

function loadHome() {
    const main = document.getElementById("main");
    main.innerText = "";
    main.appendChild(createHome());
}

export default loadHome;