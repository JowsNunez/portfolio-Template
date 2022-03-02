

document.documentElement.className =localStorage.getItem('theme')


const setTheme = (theme) => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme);
};

document.getElementById('theme-select').addEventListener('change', function () {
    setTheme(this.value);
});
