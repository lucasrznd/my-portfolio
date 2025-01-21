// Image Viewer Script
export function initImageViewer() {
    const viewer = document.getElementById("image-viewer");
    const viewerImage = document.getElementById("image-viewer-img");
    const closeViewer = document.getElementById("close-viewer");
    const prevButton = document.getElementById("prev-image");
    const nextButton = document.getElementById("next-image");

    let currentImageIndex = 0;
    let images = [];

    document.querySelectorAll(".project").forEach((project) => {
        const viewButton = project.querySelector(".project-button");
        viewButton.addEventListener("click", () => {
            images = Array.from(project.querySelectorAll(".project-image")).map(img => img.src);
            currentImageIndex = 0;
            updateImageViewer();
            viewer.classList.add("show");
        });
    });

    function updateImageViewer() {
        viewerImage.src = images[currentImageIndex];
    }

    prevButton.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImageViewer();
    });

    nextButton.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImageViewer();
    });

    closeViewer.addEventListener("click", () => {
        viewer.classList.remove("show");
        viewerImage.src = "";
    });

    viewer.addEventListener("click", (event) => {
        if (event.target === viewer) {
            viewer.classList.remove("show");
            viewerImage.src = "";
        }
    });
}