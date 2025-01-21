import { initMobileMenu } from './modules/mobileMenu.js';
import { initImageViewer } from './modules/imageViewer.js';
import { initContactForm } from './modules/contactForm.js';

// Inicializar os módulos
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();   
    initImageViewer();  
    initContactForm();  
});