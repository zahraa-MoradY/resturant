"use strict";
const navOpenIcon = document.querySelector(".menu-icon");
const listItems = document.querySelector(".list-Items");
const listLogo = document.querySelector("li.logo");
// listItems.classList.toggle("hidden");
navOpenIcon.addEventListener("click", function () {
  console.log("object");
  listItems.classList.toggle("show");
});
