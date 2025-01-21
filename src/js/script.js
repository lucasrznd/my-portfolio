import { initMobileMenu } from './modules/mobileMenu.js';
import { initImageViewer } from './modules/imageViewer.js';
import { initContactForm } from './modules/contactForm.js';
import { initNavigationIndex } from './modules/navigationIndex.js';
import { initScrollReveal } from './modules/scrollReveal.js';

// Inicializar os módulos
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();   
    initImageViewer();  
    initContactForm();  
    initNavigationIndex();
    initScrollReveal();
});