"use strict"

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const titlePart = document.createElement("h2");
    titlePart.classList.add("contact-title");
    titlePart.innerText = "Contact us via these methods:";

    contact.appendChild(titlePart);

    contact.appendChild(createMethod("via Email: idontlie@ilied.sorry"));
    contact.appendChild(createInstruction("Write to us if you prefer! Simply send us an email with one of the following subjects: Complaint, Help, Business, Origin of food"));

    contact.appendChild(createMethod("via Phone:"));
    contact.appendChild(createInstruction("Call this number if it's business related: +XX 123 456 7890"));
    contact.appendChild(createInstruction("Call this number if it's complaint related related: +YY 098 765 4321"));

    contact.appendChild(createInstruction("We generally reply between 10am-6pm. Our system sends out a mail when we cannot help with your e-mail. The same applies to phone calls."));

    return contact;
}

function createMethod(text) {
    const method = document.createElement("h4");
    method.classList.add("contact-method");
    method.innerText = text;

    return method;
}

function createInstruction(text) {
    const instruction = document.createElement("p");
    instruction.classList.add("contact-instruction");
    instruction.innerText = text;

    return instruction;
}

function loadContact() {
    const main = document.getElementById("main");
    main.innerText = "";
    main.appendChild(createContact());
}

export default loadContact;