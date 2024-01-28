const button = document.querySelector(".btn-platform");
const elementPlatforms = document.querySelector(".btn-platform .platforms");

button.addEventListener("click", () => {
    elementPlatforms.classList.toggle("active");
});


