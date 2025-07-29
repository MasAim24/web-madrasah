document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav').querySelector('ul');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Terima kasih, pesan Anda telah dikirim.');
            contactForm.reset();
        });
    }
});
