'use strict';

const menuHamb = document.querySelector('.js_menu_hamb');
const menuNav = document.querySelector('.js_menu');
const themeToggles = document.querySelectorAll('.js_theme_toggle');

function syncThemeToggles(theme) {
    const isDark = theme === 'dark';
    themeToggles.forEach(toggle => {
        toggle.setAttribute('aria-checked', String(isDark));
        toggle.setAttribute('aria-label', isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
    });
}

syncThemeToggles(document.documentElement.getAttribute('data-theme') || 'light');

themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        syncThemeToggles(next);
    });
});


function setMobileMenuOpen(isOpen) {
    menuHamb.classList.toggle('active', isOpen);
    menuNav.classList.toggle('collapse', !isOpen);
    menuHamb.setAttribute('aria-expanded', String(isOpen));
    menuHamb.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
}

menuHamb.addEventListener('click', () => {
    const isCurrentlyOpen = !menuNav.classList.contains('collapse');
    setMobileMenuOpen(!isCurrentlyOpen);
});

menuNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMobileMenuOpen(false));
});

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