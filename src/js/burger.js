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
console.log(scroll)
window.addEventListener('scroll', (e) => {
        // e.preventDefault
        // console.log(window.scrollY)
        // if (window.scrollY <  100 || window.scrollY  == 0) {
        //         header.classList.add('ontop')
        //         header.style.top=0;
        // } else {
        //         header.classList.remove('ontop')
        // }

        if(window.scrollY ==0){
                header.style.top='0px'; 
        }

        let scrolled = window.scrollY;

        if(scroll <= scrolled){
                header.style.top = '-100px'
        }else{
                header.style.top = '0px'
        }

        scroll= scrolled;
        

})


