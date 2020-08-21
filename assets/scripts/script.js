//! Seach Bar Code
timeout_var = null;

function typeWriter(
    selector_target,
    text_list,
    placeholder = false,
    i = 0,
    text_list_i = 0,
    delay_ms = 200
) {
    if (!i) {
        if (placeholder) {
            document.querySelector(selector_target).placeholder = "";
        } else {
            document.querySelector(selector_target).innerHTML = "";
        }
    }
    txt = text_list[text_list_i];
    if (i < txt.length) {
        if (placeholder) {
            document.querySelector(selector_target).placeholder += txt.charAt(
                i
            );
        } else {
            document.querySelector(selector_target).innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(
            typeWriter,
            delay_ms,
            selector_target,
            text_list,
            placeholder,
            i,
            text_list_i
        );
    } else {
        text_list_i++;
        if (typeof text_list[text_list_i] === "undefined") {
            setTimeout(
                typeWriter,
                delay_ms * 5,
                selector_target,
                text_list,
                placeholder
            );
        } else {
            i = 0;
            setTimeout(
                typeWriter,
                delay_ms * 3,
                selector_target,
                text_list,
                placeholder,
                i,
                text_list_i
            );
        }
    }
}

text_list = ["Search..."];

return_value = typeWriter("#searchbar", text_list, true);

//! Dropdown Menu Code
//// Landing page important docs dropdown
//// Content page download dropdown

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

//! Nav Section Dropdown Code
var ul = document.querySelector(".m-list");

ul.addEventListener(
    "toggle",
    function (event) {
        //* Only run if the dropdown is open
        if (!event.target.open) return;

        //* Get all other open dropdowns and close them
        var details = ul.querySelectorAll(".m-list-item-text[open]");
        Array.prototype.forEach.call(details, function (dropdown) {
            if (dropdown === event.target) return;
            dropdown.removeAttribute("open");
        });
    },
    true
);
