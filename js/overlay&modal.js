"use strict";
const showmodalBtn = document.querySelector(".showmodal");
const overlay = document.querySelector(".overLay");
const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal-body");
const waitingAnimation = document.querySelector(".waitingAnimation");
const inputdate = document.querySelector(".date");
// const selectform = document.querySelector("#costumer-select");
const overlayElements = document.querySelectorAll(".element");
const formInputs = document.querySelectorAll(".form-field");

const openoverlay = function () {
  overlay.classList.remove("hidden");
  overlay.classList.add("show");
};
const openmodal = function () {
  modal.classList.add("active");

  // modal.classList.remove("closemodal");a
  // modal.classList.add("show");
};
const openanimation = function () {
  waitingAnimation.classList.remove("hidden");
  waitingAnimation.style.display = "flex";
  setTimeout(function hiddenoverlay() {
    waitingAnimation.classList.add("hidden");
    waitingAnimation.style.display = "none";
    openmodal();
    formInputs.forEach((inputEl) => {
      const inputType = `${inputEl.getAttribute("type")}`;
      const Labeltag = inputEl.previousElementSibling;
      const parag = document.createElement("p");
      parag.classList.add(`input-${inputType}`);
      if (Labeltag === null || Labeltag === undefined) {
        let select = document.getElementById("costumer-select");
        parag.textContent = `costumer : ${
          select.options[select.selectedIndex].text
        }`;
      } else {
        parag.textContent = `${Labeltag.textContent} : ${inputEl.value}`;
      }

      modalBody.appendChild(parag);
      // const inputType = `${inputdate.getAttribute("type")}`;
      // const Labeltag = inputdate.previousElementSibling;
      // const parag = document.createElement("p");
      // parag.classList.add(`input-${inputType}`);
      // parag.textContent = `${Labeltag.textContent} : ${inputdate.value}`;
      // modal.appendChild(parag);
    });
  }, 3000);
};

const closeElements = function () {
  modal.classList.remove("active");
  // modal.classList.add("closemodal");
  overlay.classList.remove("show");
  waitingAnimation.classList.add("hidden");
  // modal.classList.add("hidden");
  overlay.classList.add("hidden");
  // El.style.display = "none";
  modalBody.innerHTML = "";
};
showmodalBtn.addEventListener("click", openoverlay);
showmodalBtn.addEventListener("click", openanimation);
closeModalBtn.addEventListener("click", closeElements);

//////////////////////////////
// const openElement = function (El) {
//   El.classList.remove("hidden");
//   El.style.display = "flex";

//   setTimeout(function hiddenoverlay() {
//     waitingAnimation.classList.add("hidden");
//     waitingAnimation.style.display = "none";
//     modal.classList.remove("hidden");
//     modal.classList.add("show");
//   }, 3000);
// };
// const closeElement = function (El) {
//   El.classList.add("hidden");
//   El.style.display = "none";
//   //   overlay.classList.remove("hidden");
// };
// const closeModal = function (El) {
//   overlay.classList.add("hidden");

//   //   overlay.classList.add("hidden");
// };

// closeModalBtn.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

// const showoverlay = function () {
//   const backdrop = document.querySelectorAll(".modal-backdrop");

// backdrop.forEach((el) => (el.style.display = "none"));
// showmodalBtn.addEventListener("click", openElement.bind(null, overlay), false);

// overlay and modal
// setTimeout(function hiddenoverlay() {
//   overlay.classList.add("hidden");
//   overlay.style.display = "none";
//   // backdrop.forEach((el) => (el.style.display = "block"));
//   overlay.style.display = "none";
//   modal.style.display = "block";
//   modal.style.opacity = 1;

//   forminputs.forEach((inputEl) => {
//     const inputType = `${inputEl.getAttribute("type")}`;
//     const Labeltag = inputEl.previousElementSibling;
//     const parag = document.createElement("p");
//     parag.classList.add(`input-${inputType}`);
//     parag.textContent = `${Labeltag.textContent} : ${inputEl.value}`;
//     modalbody.appendChild(parag);
//   });
// }, 3000);
// modal.addEventListener("click", function () {
//   modalbody.innerHTML = "";
// });
// btnClose.addEventListener("click", function () {
//   modalbody.innerHTML = "";
// });
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     modalbody.innerHTML = "";
//   }
// });
// overlaybtn.addEventListener("click", showoverlay);
