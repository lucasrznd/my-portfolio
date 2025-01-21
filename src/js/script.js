import { initMobileMenu } from './modules/mobileMenu.js';
import { initImageViewer } from './modules/imageViewer.js';

// Inicializar os módulos
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();   
    initImageViewer();  
});