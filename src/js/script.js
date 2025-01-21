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
const prevButton = document.getElementById("prev-image");
const nextButton = document.getElementById("next-image");

let currentImageIndex = 0;
let images = [];

// Adiciona evento de clique aos botões "Ver imagens"
document.querySelectorAll(".project").forEach((project) => {
    const viewButton = project.querySelector(".project-button"); // Botão "Ver imagem"
    viewButton.addEventListener("click", () => {
        images = Array.from(project.querySelectorAll(".project-image")).map(img => img.src); // Coleta todas as imagens do projeto
        currentImageIndex = 0; // Reinicia o índice
        updateImageViewer(); // Atualiza o modal
        viewer.classList.add("show");
    });
});

// Atualiza a imagem exibida
function updateImageViewer() {
    viewerImage.src = images[currentImageIndex];
}

// Botões de navegação
prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImageViewer();
});

nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImageViewer();
});

// Fecha o modal
closeViewer.addEventListener("click", () => {
    viewer.classList.remove("show");
    viewerImage.src = "";
});

// Fecha ao clicar fora da imagem
viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
        viewer.classList.remove("show");
        viewerImage.src = "";
    }
});
