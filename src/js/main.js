'use strict';

const menuHamb = document.querySelector('.js_menu_hamb');
const menuNav = document.querySelector('.js_menu');
const themeToggle = document.querySelector('.js_theme_toggle');
const themeIcon = document.querySelector('.js_theme_icon');

function applyThemeIcon(theme) {
    if (!themeIcon || !themeToggle) return;
    const isDark = theme === 'dark';
    themeIcon.className = isDark ? 'fa-solid fa-sun js_theme_icon' : 'fa-solid fa-moon js_theme_icon';
    themeToggle.setAttribute('aria-label', isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
}

applyThemeIcon(document.documentElement.getAttribute('data-theme') || 'light');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        applyThemeIcon(next);
    });
}


function HandleClick(){
    this.classList.toggle("active");
    const isOpen = menuNav.classList.toggle('collapse') === false;
    this.setAttribute('aria-expanded', String(isOpen));
    this.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
}

menuHamb.addEventListener('click', HandleClick);

const sections = document.querySelectorAll('.main > section');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !prefersReducedMotion) {
    sections.forEach(section => section.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => observer.observe(section));
}