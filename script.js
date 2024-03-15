

//CAMBIAR DE IDIOMA

// Estado inicial del idioma
let idiomaActual = 'es'; // español por defecto

// Función para cambiar el idioma
function cambiarIdioma() {
    if (idiomaActual === 'es') {
        document.getElementById('title').innerText = 'Welcome!';
        document.getElementById('presentation').innerText = 'I am Franco Correa, student of Systems Development and FullStack Development. I am aware of new technologies and the potential of teamwork.I hope you enjoy my website!';
        idiomaActual = 'en'; // Cambiamos el idioma a inglés
    } else {
        window.location.href = 'index.html';
    }
}

// Event listener para el botón
document.getElementById('language').addEventListener('click', cambiarIdioma);
