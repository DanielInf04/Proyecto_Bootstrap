// Script para cerrar el acordeón al cambiar de página
document.addEventListener('DOMContentLoaded', function () {
    // Cerrar todas las secciones del acordeón al cargar la página
    var myAccordion = document.getElementById('accordionFAQ');
    var collapseElements = myAccordion.querySelectorAll('.accordion-collapse');

    collapseElements.forEach(function (collapseElement) {
    // Asegurarse de que todas las secciones estén cerradas
    collapseElement.classList.remove('show');
    });
});

// Script para ocultar el menú al hacer clic en un ítem del navbar en pantallas menores de 992px
document.querySelectorAll('.navbar-nav .nav-link').forEach(function(item) {
    item.addEventListener('click', function() {
        // Solo se ejecuta en pantallas pequeñas (menos de 992px)
        if (window.innerWidth < 992) {
        const navbarCollapse = document.getElementById('navbarNav');
        const navbarToggle = document.querySelector('.navbar-toggler');
        
        // Si el menú está abierto, lo cierra
        if (navbarCollapse.classList.contains('show')) {
            navbarToggle.click();
        }
        }
    });
});

// Obtén el formulario y el botón
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submitBtn');

// Añadir un evento para capturar el envío del formulario
form.addEventListener('submit', function(event) {
  // Prevenir el envío del formulario
  event.preventDefault();

  // Validación manual (si quieres hacerla antes de mostrar el mensaje)
  if (form.checkValidity() === false) {
    // Si no es válido, puedes agregar feedback aquí
    form.classList.add('was-validated');
  } else {
    // Si es válido, mostrar el mensaje de éxito o realizar alguna acción
    showSuccessMessage();
  }
});

// Función para mostrar un mensaje de éxito o realizar alguna otra acción
function showSuccessMessage() {
  alert("Formulario enviado correctamente (simulación, no se envió).");

  // Aquí puedes colocar una lógica para mostrar un toast, modal o cualquier otro mensaje
  // Por ejemplo, un toast:
  var toast = new bootstrap.Toast(document.getElementById('liveToast'));
  toast.show();
}