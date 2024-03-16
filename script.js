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
let listWidth = track.parentNode.offsetWidth;
let leftPosition = 0;
let isDragging = false;
let startX;
let scrollLeft;

track.addEventListener('mousedown', startDragging);
track.addEventListener('touchstart', startDragging);

track.addEventListener('mouseleave', stopDragging);
track.addEventListener('mouseup', stopDragging);
track.addEventListener('touchend', stopDragging);

track.addEventListener('mousemove', moveTracking);
track.addEventListener('touchmove', moveTracking);

function startDragging(e) {
    isDragging = true;
    startX = (e.type === 'mousedown') ? e.pageX - track.offsetLeft : e.touches[0].clientX - track.offsetLeft;
    scrollLeft = track.parentNode.scrollLeft;
}

function stopDragging() {
    isDragging = false;
}

function moveTracking(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = (e.type === 'mousemove') ? e.pageX - track.offsetLeft : e.touches[0].clientX - track.offsetLeft;
    const walk = (x - startX) * 3; // Ajuste de sensibilidad de desplazamiento
    track.parentNode.scrollLeft = scrollLeft - walk;
}
