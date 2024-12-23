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

// Función para validar el nombre
function validarNombre() {
  const nombreInput = document.getElementById('nombre');
  const feedback = nombreInput.nextElementSibling; // Mensaje de error

  if (nombreInput.value.trim().length === 0) {
      // Si el campo está vacío
      nombreInput.classList.remove('is-valid');
      nombreInput.classList.add('is-invalid');
      feedback.textContent = 'Por favor, ingresa tu nombre completo.';
      feedback.style.display = 'block';
  } else {
      // Si el campo tiene valor válido
      nombreInput.classList.remove('is-invalid');
      nombreInput.classList.add('is-valid');
      feedback.textContent = '';
      feedback.style.display = 'none';
  }
}

// Función para validar el correo electrónico
function validarEmail() {
  const emailInput = document.getElementById('email');
  const feedback = emailInput.nextElementSibling; // Mensaje de error
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Expresión regular para validar el correo

  if (emailInput.value.trim().length === 0) {
      // Si el campo está vacío
      emailInput.classList.remove('is-valid');
      emailInput.classList.add('is-invalid');
      feedback.textContent = 'Por favor, ingresa un correo electrónico válido.';
      feedback.style.display = 'block';
  } else if (!emailPattern.test(emailInput.value.trim())) {
      // Si el correo no es válido
      emailInput.classList.remove('is-valid');
      emailInput.classList.add('is-invalid');
      feedback.textContent = 'Por favor, ingresa un correo electrónico válido.';
      feedback.style.display = 'block';
  } else {
      // Si el correo es válido
      emailInput.classList.remove('is-invalid');
      emailInput.classList.add('is-valid');
      feedback.textContent = '';
      feedback.style.display = 'none';
  }
}

function limpiarFormulario() {
    // Resetea el formulario
    document.getElementById('contact-form').reset();
  
    var fechaInput = document.getElementById('fecha');
    var fechaActual = new Date().toISOString().split('T')[0];

    fechaInput.value = fechaActual;

    // Elimina las clases de validación de todos los campos de texto y selectores
    const inputs = document.querySelectorAll('.form-control, .form-select');
    inputs.forEach(input => {
      input.classList.remove('is-invalid', 'is-valid'); // Eliminar las clases de validación
    });
  
    // Eliminar los mensajes de error
    const feedbacks = document.querySelectorAll('.invalid-feedback');
    feedbacks.forEach(feedback => {
      feedback.style.display = 'none'; // Ocultar los mensajes de error
    });
  }