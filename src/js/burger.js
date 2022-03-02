const burger = document.querySelector('#burger button');
const menu = document.querySelector('.content-nav');
const header = document.querySelector('header')

//const btn = document.querySelector('.btn-burger');
let contador = 0;
burger.addEventListener('click', () => {
        menu.classList.toggle('show')

        burger.classList.toggle('open')
});




// Efecto nav y header
let scroll = window.scrollY;
window.addEventListener('scroll', () => {

        if (window.scrollY <= 50) {
                header.classList.add('ontop')
        } else {
                header.classList.remove('ontop')
        }

        let scrolled = window.scrollY;

        if(scroll <= scrolled){
                header.style.top = '-100px'
        }else{
                header.style.top = '0px'
        }

        scroll= scrolled;
        

})


