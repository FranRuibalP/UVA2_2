// script.js

const modeToggleBtn = document.getElementById('mode-toggle-btn');
const modeIcon = document.getElementById('mode-icon');

modeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Cambia el icono dependiendo del modo actual
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.textContent = '🌙'; // Modo oscuro: muestra la luna
    } else {
        modeIcon.textContent = '🌞'; // Modo claro: muestra el sol
    }
});
