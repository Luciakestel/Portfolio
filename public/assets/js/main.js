'use strict';

const menuHamb = document.querySelector('.js_menu_hamb');
const menuNav = document.querySelector('.js_menu');


function HandleClick(event){
    event.preventDefault();
    this.classList.toggle("active");
    if(menuNav.classList.contains('collapse')){
        menuNav.classList.remove('collapse');
    } else {
        menuNav.classList.add('collapse');
    }
}

menuHamb.addEventListener(('click'), HandleClick);

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
//# sourceMappingURL=main.js.map
