"use strict";const menuHamb=document.querySelector(".js_menu_hamb"),menuNav=document.querySelector(".js_menu");function HandleClick(e){e.preventDefault(),this.classList.toggle("active"),menuNav.classList.contains("collapse")?menuNav.classList.remove("collapse"):menuNav.classList.add("collapse")}menuHamb.addEventListener("click",HandleClick);