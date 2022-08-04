const texto = document.querySelector('.txt')
const texto2 = document.querySelector('.txt2')
const skills = document.querySelector('#skills')
const card = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const menuLinks = document.querySelectorAll('.dropDown a[href^="#"]')


window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};
/*FUNCAO SCROLL SUAVE MOBILE */

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth"
    })
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 150
    nativeScroll(distanceFromTheTop)

}

menuLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})




/* DIGITACAO EM FORMA DE MAQUINA DE ESCREVER */

const digita = (elemento) => {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 50 * i)
    })

}

const digita2 = (elemento) => {
    const texto2Array = elemento.innerHTML.split('');
    elemento.innerHTML = '  ';
    texto2Array.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 150 * i)

    })

}

/* ROTAÇÃO DOS CARDS AO PASSAR O MOUSE */

skills.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
    card2.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
    card3.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`


})

skills.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
    card2.style.transition = 'all 0.5s ease'
    card2.style.transform = `rotateX(0deg) rotateY(0deg)`
    card3.style.transition = 'all 0.5s ease'
    card3.style.transform = `rotateX(0deg) rotateY(0deg)`
})



digita(texto)
digita2(texto2)