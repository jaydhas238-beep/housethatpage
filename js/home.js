const menuToggle = document.getElementById("menuToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

menuToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
});
