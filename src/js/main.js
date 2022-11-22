'use strict';

const menuHamb = document.querySelector('.js_menu_hamb');
const menuNav = document.querySelector('.js_menu');

function HandleClick(){
    if(menuNav.classList.contains('collapse')){
        menuNav.classList.remove('collapse');
        menuNav.classList.add('menu');
    } else {
        menuNav.classList.add('collapse');
    }
}

menuHamb.addEventListener(('click'), HandleClick);