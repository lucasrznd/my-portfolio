// Abrir menu em dispositivos móveis e alterar ícone
export function initMobileMenu() {
    const mobileBtn = document.getElementById("mobile-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileNavItems = document.querySelectorAll('#mobile-nav-list .nav-item a');
    const mobileIcon = mobileBtn.querySelector("i"); 

    mobileBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");

        if (mobileMenu.classList.contains("active")) {
            mobileIcon.classList.remove("fa-bars");
            mobileIcon.classList.add("fa-x");
        } else {
            mobileIcon.classList.remove("fa-x");
            mobileIcon.classList.add("fa-bars");
        }

        mobileBtn.classList.toggle("open");
    });

    mobileNavItems.forEach(item => {
        item.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            mobileIcon.classList.remove("fa-x");
            mobileIcon.classList.add("fa-bars");
            mobileBtn.classList.remove("open"); 
        });
    });
}