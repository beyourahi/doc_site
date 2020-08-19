//! Dropdown Menu Code

let button = document.querySelector(".text");
let dropDown = document.querySelector(".dropdown");

button.addEventListener("click", (evt) => {
    if (dropDown.classList.contains("open")) {
        dropDown.classList.remove("open");
    } else {
        dropDown.classList.add("open");
    }
});

document.addEventListener("click", (evt) => {
    if (!evt.target.closest(".dropdown")) {
        dropDown.classList.remove("open");
    }
});
