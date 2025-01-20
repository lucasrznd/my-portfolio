// Abrir menu em mobiles e alterar icon
document.addEventListener("DOMContentLoaded", function () {
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
});

// Image Viewer Script
const viewer = document.getElementById("image-viewer");
const viewerImage = document.getElementById("image-viewer-img");
const closeViewer = document.getElementById("close-viewer");
const viewerButtons = document.querySelectorAll(".project-button");

// Adiciona evento de clique aos botões "Ver imagem"
viewerButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const projectCard = event.target.closest(".project");
        const projectImage = projectCard.querySelector(".project-image").src;

        viewerImage.src = projectImage;
        viewer.classList.add("show"); 
    });
});

// Evento para fechar o modal
closeViewer.addEventListener("click", () => {
    viewer.classList.remove("show"); // Remove a classe para fechar com animação
    viewerImage.src = ""; // Limpa a imagem para evitar carregamentos desnecessários
});

// Fecha o modal ao clicar fora da imagem
viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
        viewer.classList.remove("show"); // Remove a classe para fechar com animação
        viewerImage.src = "";
    }
});
