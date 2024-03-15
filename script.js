

//CAMBIAR DE IDIOMA

// Estado inicial del idioma
let idiomaActual = 'es'; // español por defecto

// Función para cambiar el idioma
function cambiarIdioma() {
    if (idiomaActual === 'es') {
        document.getElementById('title').innerText = 'Hi 👋';
        document.getElementById('presentation').innerText = 'I am Correa Franco, student of FullStack Development.\nI am aware of the potential of new technologies and teamwork\nI hope you enjoy my website!';
        document.getElementById('en-proyects').innerText = 'Proyects';
        document.getElementById('en-services').innerText = 'Services';
        document.getElementById('en-contact').innerText = 'Contact';
        document.getElementById('language').innerText = 'ES';
        idiomaActual = 'en'; // Cambiamos el idioma a inglés
    } else {
        window.location.href = 'index.html';
    }
}

// Event listener para el botón
document.getElementById('language').addEventListener('click', cambiarIdioma);
