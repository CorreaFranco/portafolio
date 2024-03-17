//FORMULARIO

const form = document.getElementById("form");
const nombre = document.getElementById("name");
const parrafo = document.getElementById("alert");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});



//CAMBIAR DE IDIOMA

// Estado inicial del idioma
let idiomaActual = 'es'; // español por defecto

// Función para cambiar el idioma
function cambiarIdioma() {
    if (idiomaActual === 'es') {
        document.getElementById('title').innerText = 'Hi 👋';
        document.getElementById('presentation').innerText = 'I´m Correa Franco, student of FullStack Development.\nI am aware of the potential of new technologies and teamwork\nI hope you enjoy my website!';
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


//PROYECTS
let track = document.getElementById('track');
let slickWidth = document.querySelector('.slick').offsetWidth;
let listWidth = track.offsetWidth;
let currentIndex = 0; // Variable para rastrear el índice de la diapositiva actual

function prevAction() {
    if (currentIndex > 0) { // Verifica si hay diapositivas anteriores
        currentIndex--;
        const newPosition = -slickWidth * currentIndex;
        track.style.transform = `translateX(${newPosition}px)`;
    }
}

function nextAction() {
    const maxIndex = track.children.length - 1; // Índice máximo de las diapositivas
    if (currentIndex < maxIndex) { // Verifica si hay diapositivas siguientes
        currentIndex++;
        const newPosition = -slickWidth * currentIndex;
        track.style.transform = `translateX(${newPosition}px)`;
    }
}
