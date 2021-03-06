// Нашли контейнер с select
const selectElement = document.querySelectorAll("[data-select]");
// Нашли реальный select
const selectElementReal = document.querySelector("#selectReal");

// Прослуиваем клик в контейнере с select
[...selectElement].forEach(selectButtonDropdown =>
    selectButtonDropdown.addEventListener("click", function (event) {
        // Выбираем элемент из dropdown
        console.log(event.target);
        if (event.target.hasAttribute("data-select-item")) {
            const itemTitle = event.target.getAttribute(["data-select-item"]);
            event.target.closest("[data-select]").querySelector("[data-select-title]").textContent = itemTitle;
            // Выбираем значение в реальном select
            selectElementReal.value = itemTitle.toLowerCase();
        }
    })
);