"use strict"

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createDish("Coconut & Squash dhansak", "butternut squash, onions, tomatoes, lentils, baby spinach, mini naan bread"));
    menu.appendChild(createDish("Teriyaki salmon with sesame pack choi", "salmon fillet, noodles, pak choi, cloves, fish/vegetable stock"));
    menu.appendChild(createDish("Apple pie", "white sugar, brown sugar, apples, unsalted butter"));

    return menu;
}

function createDish(name, ingredients) {
    const dishItem = document.createElement("div");
    dishItem.classList.add("dish");
    
    const dishName = document.createElement("p");
    dishName.classList.add("dish-name");
    dishName.innerText = name;

    const dishIngredients = document.createElement("p");
    dishIngredients.classList.add("dish-ingredients");
    dishIngredients.innerText = ingredients;

    dishItem.appendChild(dishName);
    dishItem.appendChild(dishIngredients);

    return dishItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.innerText = "";
    main.appendChild(createMenu());
}

export default loadMenu;