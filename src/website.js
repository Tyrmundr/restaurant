import loadHome from "./load-home";
import loadMenu from "./load-menu";
import loadAbout from "./load-about";
import loadContact from "./load-contact";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.innerText = "The Hungry Bard"

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const btnHome = document.createElement("button");
    btnHome.classList.add("btn-nav");
    btnHome.innerText = "Home";
    btnHome.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(btnHome);
        loadHome();
    })

    const btnMenu = document.createElement("button");
    btnMenu.classList.add("btn-nav");
    btnMenu.innerText = "Menu";
    btnMenu.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(btnMenu);
        loadMenu();
    })

    const btnAbout = document.createElement("button");
    btnAbout.classList.add("btn-nav");
    btnAbout.innerText = "About";
    btnAbout.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(btnAbout);
        loadAbout();
    })

    const btnContact = document.createElement("button");
    btnContact.classList.add("btn-nav");
    btnContact.innerText = "Contact";
    btnContact.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(btnContact);
        loadContact();
    })

    nav.appendChild(btnHome);
    nav.appendChild(btnMenu);
    nav.appendChild(btnAbout);
    nav.appendChild(btnContact);

    return nav;
}

function setActiveBtn(button) {
    const buttons = document.querySelectorAll(".btn-nav");

    buttons.forEach((button) => {
        if(button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");

    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerText = document.createElement("span");
    footerText.classList.add("footer-text");
    footerText.innerText = "Copyright ?? Tyrmundr 2021";

    footer.appendChild(footerText);

    return footer;
}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveBtn(document.querySelector(".btn-nav"));
    loadHome(); 
}

export default initializeWebsite;