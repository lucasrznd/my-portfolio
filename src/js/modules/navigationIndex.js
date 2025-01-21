export function initNavigationIndex() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        // Identifica a seção visível
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50; // Compensação caso tenha header fixo
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        // Atualiza a classe 'active' no menu
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.querySelector(`a[href="#${currentSection}"]`)) {
                item.classList.add('active');
            }
        });
    });
}