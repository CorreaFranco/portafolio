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
let currentIndex = 0;

// Variables para el seguimiento del movimiento táctil
let touchStartX = 0;
let touchEndX = 0;

// Añadir listeners de eventos táctiles
track.addEventListener('touchstart', touchStart);
track.addEventListener('touchmove', touchMove);
track.addEventListener('touchend', touchEnd);

function touchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function touchMove(event) {
    touchEndX = event.touches[0].clientX;
}

function touchEnd() {
    // Calcular la diferencia de posición táctil
    let touchDiff = touchStartX - touchEndX;

    // Determinar si se debe avanzar o retroceder en el carrusel
    if (touchDiff > 50) {
        nextAction();
    } else if (touchDiff < -50) {
        prevAction();
    }
}

// Las funciones prevAction() y nextAction() se modifican para que no se llamen directamente desde los botones.

function prevAction() {
    currentIndex = (currentIndex === 0) ? track.children.length - 1 : currentIndex - 1;
    const newPosition = -slickWidth * currentIndex;
    track.style.transform = `translateX(${newPosition}px)`;
}

function nextAction() {
    currentIndex = (currentIndex === track.children.length - 1) ? 0 : currentIndex + 1;
    const newPosition = -slickWidth * currentIndex;
    track.style.transform = `translateX(${newPosition}px)`;
}
