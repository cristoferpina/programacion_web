const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = 'modo claro';
} else {
    themeToggle.innerHTML = 'modo oscuro';
}

themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        this.innerHTML = 'modo claro';
        localStorage.setItem('theme', 'dark');
    } else {
        this.innerHTML = 'modo oscuro';
        localStorage.setItem('theme', 'light');
    }
});
