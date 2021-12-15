"use strict"

function createAbout() {
    const about = document.createElement("div");
    about.classList.add("about");

    about.appendChild(createParagraph("We started as a small-ish group of friends with a love for RPGs and creating delicious food. We've met many interesting people throughout the years playing online, and conversations eventually touched on cooking, baking and everything culinary. We gathered some ideas about different cultural dishes."));

    about.appendChild(createParagraph("'Our goal is to serve the weary traveler food from around the world!'"));

    about.appendChild(createParagraph("We decided to keep the RPG element and included the cultural aspects as well - only we manifest our ideas in the form of something practical: food and drinks. We have vegan dishes, pescatarian dishes, a repertoire of dishes for meat lovers too. We also serve pastry and we happen to have an asian kitchen. Everything is fresh and raised/grown in a safe environment, no factory farming involved!"))

    return about;
}

function createParagraph(text) {
    const para = document.createElement("p");
    para.classList.add("about-para");
    para.innerText = text;

    return para;
}


function loadAbout() {
    const main = document.getElementById("main");
    main.innerText = "";
    main.appendChild(createAbout());
}

export default loadAbout;