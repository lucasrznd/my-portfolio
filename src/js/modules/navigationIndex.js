export function initNavigationIndex() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        let currentSectionIndex = 0; 
        const scrollPosition = window.scrollY; 

        // Adiciona ou remove sombra no header
        if (scrollPosition <= 0) {
            header.style.boxShadow = 'none';
        } else {
            header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)';
        }

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 96; 
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSectionIndex = index; 
            }
        });

        navItems.forEach(item => item.classList.remove('active'));
        navItems[currentSectionIndex].classList.add('active');
    });
}