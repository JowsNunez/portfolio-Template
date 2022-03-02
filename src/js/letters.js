

document.documentElement.className =localStorage.getItem('theme')


const setTheme = (theme) => {
    document.documentElement.toggleAttribute ( theme)
    document.documentElement.className=theme
    localStorage.setItem('theme', theme);
};

// document.getElementById('theme-select').addEventListener('change', function () {
//     setTheme( this.value);
   
// });


let query = document.querySelectorAll('.change');



query.forEach(item =>{
   item.addEventListener('click', e=>{
    setTheme( e.target.value);
   })
})

window.addEventListener('change',()=>{


})