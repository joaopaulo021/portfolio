const mobileContainer = document.querySelector('.menu-mobile-container')
const menuMobile = document.querySelector('.menu-hamb')
const dropDown = document.querySelector('.dropDown')
const menu1 = document.querySelector('.menu-hamb .menu1')
const menu2 = document.querySelector('.menu-hamb .menu2')
const menu3 = document.querySelector('.menu-hamb .menu3')
const btnMenu = document.querySelectorAll('.dropDown a')


/* ESCONDE MENU MOBILE AO CLICAR NOS BOTOES */

btnMenu.forEach((link) => {
    link.addEventListener('click', hideMenuClick)

})

function hideMenuClick() {
    dropDown.classList.remove('showMenu')
    dropDown.classList.add('dropDown')
    menu1.classList.remove('click-menu1')
    menu2.classList.remove('click-menu2')
    menu3.classList.remove('click-menu3')
    menuMobile.classList.remove('menu-hamb-click')
    menuMobile.classList.add('menu-hamb')
}


/* MOSTRA O MENU DROPDOWN E FAZ UM 'X' NO MENU HAMBURGER */

menuMobile.addEventListener('click', () => {
    if (menuMobile.classList.contains('menu-hamb') && dropDown.classList.contains('dropDown')) {

        menuMobile.classList.add('menu-hamb-click')
        menu1.classList.add('click-menu1')
        menu2.classList.add('click-menu2')
        menu3.classList.add('click-menu3')
        dropDown.classList.remove('dropDown')
        dropDown.classList.add('showMenu')

    } else if (menuMobile.classList.contains('menu-hamb-click')) {
        dropDown.classList.remove('showMenu')
        dropDown.classList.add('dropDown')
        menuMobile.classList.remove('menu-hamb-click')
        menuMobile.classList.add('menu-hamb')
        menu1.classList.remove('click-menu1')
        menu2.classList.remove('click-menu2')
        menu3.classList.remove('click-menu3')

    }

})