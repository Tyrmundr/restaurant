import loadHome from "./load-home";

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");

    return main;
}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createMain());

    loadHome();
}

export default initializeWebsite;