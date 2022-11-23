'use strict';

const menuHamb = document.querySelector('.js_menu_hamb');
const menuNav = document.querySelector('.js_menu');
console.log('holis');

function HandleClick(){
    console.log('haciendo click');
    if(menuNav.classList.contains('collapse')){
        menuNav.classList.remove('collapse');
    } else {
        menuNav.classList.add('collapse');
    }
}

menuHamb.addEventListener(('click'), HandleClick);