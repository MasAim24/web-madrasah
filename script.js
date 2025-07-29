document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav').querySelector('ul');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});
