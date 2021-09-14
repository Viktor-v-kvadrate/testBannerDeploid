const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    spaceBetween: 5,
    breakpoints: {
        300: {
            width: 280,
        },
        375: {
            width: 335,
        },
        415: {
            width: 375,
        }
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 800,

});

let changeStyle = document.getElementById('changeTheme');
changeStyle.onclick = function () {
    let changeStyleTag = document.getElementById('dark_style');
    changeStyleTag.classList.toggle('dark_style')
}

let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
let btnLink = document.querySelector('.btnLink')

function changeCard1() {
    card1.classList.toggle('changeBgColor')
    card2.classList.remove('changeBgColor')
    card3.classList.remove('changeBgColor')
}

function changeCard2() {
    card2.classList.toggle('changeBgColor')
    card3.classList.remove('changeBgColor')
    card1.classList.remove('changeBgColor')
}

function changeCard3() {
    card3.classList.toggle('changeBgColor')
    card1.classList.remove('changeBgColor')
    card2.classList.remove('changeBgColor')
}

function linkTo() {
    if (card1.matches('[class$="changeBgColor"]')) {
        btnLink.setAttribute('target', '_blank');
        btnLink.setAttribute('href', 'https://www.google.com/search?q=1');
    } else if (card2.matches('[class$="changeBgColor"]')) {
        btnLink.setAttribute('target', '_blank');
        btnLink.setAttribute('href', 'https://www.google.com/search?q=2');
    } else if (card3.matches('[class$="changeBgColor"]')) {
        btnLink.setAttribute('target', '_blank');
        btnLink.setAttribute('href', 'https://www.google.com/search?q=3')
    } else {
        btnLink.removeAttribute('target');
        btnLink.removeAttribute('href');
    }
}