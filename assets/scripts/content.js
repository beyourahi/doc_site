//! Nav Section Dropdown Code

let button = document.querySelector(".module-text");
let dropDown = document.querySelector(".module-dropdown");

button.addEventListener("click", (evt) => {
    if (dropDown.classList.contains("open")) {
        dropDown.classList.remove("open");
    } else {
        dropDown.classList.add("open");
    }
});

document.addEventListener("click", (evt) => {
    if (!evt.target.closest(".module-dropdown")) {
        dropDown.classList.remove("open");
    }
});
