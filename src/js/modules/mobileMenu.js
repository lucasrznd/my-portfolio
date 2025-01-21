// Abrir menu em dispositivos móveis e alterar ícone
export function initMobileMenu() {
    const mobileBtn = document.getElementById("mobile-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");

        const icon = mobileBtn.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-x");
        }
    });
}