const theme = localStorage.getItem('theme');
if (theme) {
    document.documentElement.classList.add(theme);
} else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
}

const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark-mode')) {
        document.documentElement.classList.remove('dark-mode');
        document.documentElement.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode'); 
    } else {
        document.documentElement.classList.remove('light-mode');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); 
    }
};

document.getElementById('toggle-theme').addEventListener('click', toggleTheme);