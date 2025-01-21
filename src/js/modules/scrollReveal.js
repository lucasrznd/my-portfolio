// Animacoes de Scroll
export function initScrollReveal() {
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2500,
        distance: '20%'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 2500,
        distance: '20%'
    });

    ScrollReveal().reveal('.technology', {
        origin: 'left',
        duration: 2500,
        distance: '20%'
    });

    ScrollReveal().reveal('.project', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.contact-container', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
}