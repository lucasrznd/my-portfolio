// Abrir menu em mobiles e alterar icon
document.addEventListener("DOMContentLoaded", function() {
    const mobileBtn = document.getElementById("mobile-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileBtn.addEventListener("click", function() {
        mobileMenu.classList.toggle("active");

        const icon = mobileBtn.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-x");
        }
    });
});
