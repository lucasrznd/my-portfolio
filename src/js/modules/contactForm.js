// Alternar entre os formulários de e-mail e WhatsApp
export function initContactForm() {
    const switchButtons = document.querySelectorAll('.switch-btn');
    const forms = document.querySelectorAll('.contact-form');

    switchButtons.forEach((button) => {
        button.addEventListener('click', () => {
            switchButtons.forEach((btn) => btn.classList.remove('active'));
            forms.forEach((form) => form.classList.remove('active'));

            button.classList.add('active');
            const selectedForm = document.getElementById(button.dataset.form);
            selectedForm.classList.add('active');
        });
    });

    const whatsappForm = document.getElementById('whatsapp-form');
    const whatsappBaseUrl = 'https://wa.me/5543998254744'; // Substitua pelo seu número
    whatsappForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const messageText = document.getElementById('whatsapp-message').value;
        const encodedMessage = encodeURIComponent(messageText);
        const whatsappUrl = `${whatsappBaseUrl}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    });
}