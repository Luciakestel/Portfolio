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