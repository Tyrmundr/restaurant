(()=>{"use strict";function e(e){const n=document.createElement("p");return n.classList.add("home-text"),n.innerText=e,n}const n=function(){const n=document.getElementById("main");n.innerText="",n.appendChild(function(){const n=document.createElement("div");n.classList.add("home"),n.appendChild(e("Culinary wonders since 1901")),n.appendChild(e("Try our Vegan and non-Vegan dishes")),n.appendChild(e("Call, order online or visit us"));const t=document.createElement("img");return t.src="chef.jpg",t.classList.add("main-image"),t.alt="Dude vegetabling",n.appendChild(t),n.appendChild(e("Best food and service in the county!")),n}())};function t(e,n){const t=document.createElement("div");t.classList.add("dish");const a=document.createElement("p");a.classList.add("dish-name"),a.innerText=e;const i=document.createElement("p");return i.classList.add("dish-ingredients"),i.innerText=n,t.appendChild(a),t.appendChild(i),t}function a(e){const n=document.createElement("p");return n.classList.add("about-para"),n.innerText=e,n}function i(e){const n=document.createElement("h4");return n.classList.add("contact-method"),n.innerText=e,n}function s(e){const n=document.createElement("p");return n.classList.add("contact-instruction"),n.innerText=e,n}function d(){const e=document.createElement("header");e.classList.add("header");const d=document.createElement("h1");return d.classList.add("restaurant-name"),d.innerText="The Hungry Bard",e.appendChild(d),e.appendChild(function(){const e=document.createElement("nav");e.classList.add("nav");const d=document.createElement("button");d.classList.add("btn-nav"),d.innerText="Home",d.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(d),n())}));const c=document.createElement("button");c.classList.add("btn-nav"),c.innerText="Menu",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(c),function(){const e=document.getElementById("main");e.innerText="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(t("Coconut & Squash dhansak","butternut squash, onions, tomatoes, lentils, baby spinach, mini naan bread")),e.appendChild(t("Teriyaki salmon with sesame pack choi","salmon fillet, noodles, pak choi, cloves, fish/vegetable stock")),e.appendChild(t("Apple pie","white sugar, brown sugar, apples, unsalted butter")),e}())}())}));const l=document.createElement("button");l.classList.add("btn-nav"),l.innerText="About",l.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(l),function(){const e=document.getElementById("main");e.innerText="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("about"),e.appendChild(a("We started as a small-ish group of friends with a love for RPGs and creating delicious food. We've met many interesting people throughout the years playing online, and conversations eventually touched on cooking, baking and everything culinary. We gathered some ideas about different cultural dishes.")),e.appendChild(a("'Our goal is to serve the weary traveler food from around the world!'")),e.appendChild(a("We decided to keep the RPG element and included the cultural aspects as well - only we manifest our ideas in the form of something practical: food and drinks. We have vegan dishes, pescatarian dishes, a repertoire of dishes for meat lovers too. We also serve pastry and we happen to have an asian kitchen. Everything is fresh and raised/grown in a safe environment, no factory farming involved!")),e}())}())}));const r=document.createElement("button");return r.classList.add("btn-nav"),r.innerText="Contact",r.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(r),function(){const e=document.getElementById("main");e.innerText="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const n=document.createElement("h2");return n.classList.add("contact-title"),n.innerText="Contact us via these methods:",e.appendChild(n),e.appendChild(i("via Email: idontlie@ilied.sorry")),e.appendChild(s("Write to us if you prefer! Simply send us an email with one of the following subjects: Complaint, Help, Business, Origin of food")),e.appendChild(i("via Phone:")),e.appendChild(s("Call this number if it's business related: +XX 123 456 7890")),e.appendChild(s("Call this number if it's complaint related related: +YY 098 765 4321")),e.appendChild(s("We generally reply between 10am-6pm. Our system sends out a mail when we cannot help with your e-mail. The same applies to phone calls.")),e}())}())})),e.appendChild(d),e.appendChild(c),e.appendChild(l),e.appendChild(r),e}()),e}function o(e){document.querySelectorAll(".btn-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.getElementById("content");e.appendChild(d()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const n=document.createElement("span");return n.classList.add("footer-text"),n.innerText="Copyright © Tyrmundr 2021",e.appendChild(n),e}()),o(document.querySelector(".btn-nav")),n()}()})();