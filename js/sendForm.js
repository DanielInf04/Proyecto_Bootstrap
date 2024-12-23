function showModal(event) {
  event.preventDefault();

  var form = document.getElementById('contact-form');
  var nombreInput = document.getElementById('nombre');
  var fechaInput = document.getElementById('fecha');

  var fechaActual = new Date().toISOString().split('T')[0];

  // Validamos la longitud del teléfono
  validarLongitudTelefono();

  // Validar si la fecha seleccionada es menor a la actual
  if (fechaInput.value < fechaActual) {
    fechaInput.classList.add('is-invalid');
    fechaInput.classList.remove('is-valid');

    var feedback = fechaInput.nextElementSibling;
    feedback.textContent = "La fecha no puede ser menor a hoy.";
    feedback.computedStyleMap.display = "block";
    return;
  } else {
    // Quitar el error si la fecha es válida
    fechaInput.classList.remove('is-invalid');
    fechaInput.classList.add('is-valid');
  }

  // Si el formulario es válido, muestra el modal
  if (form.checkValidity()) {
    // Quita cualquier marca de error previa
    form.classList.remove('was-validated');

    var nombreUsuario = nombreInput.value;

    // Añadimos el nombre al modal
    var modalMensaje = document.getElementById('modalMensaje');
    modalMensaje.style.fontSize = '1.2rem';
    modalMensaje.innerHTML = `Gracias, ${nombreUsuario}! Tu mensaje ha sido enviado con éxito. Te responderemos lo antes posible.`;
    // Muestra el modal
    var myModal = new bootstrap.Modal(document.getElementById('modalSuccess'), {
      keyboard: false,
    });
    myModal.show();

    // Limpia el formulario después de mostrar el modal
    setTimeout(function () {
      form.reset();

      // Ponemos por defecto la fecha de hoy
      fechaInput.value = fechaActual;

      // Eliminamos los estilos de validación después del reinicio
      form.querySelectorAll('.is-valid, .is-invalid').forEach(function (input) {
        input.classList.remove('is-valid', 'is-invalid');
      });
    }, 1000);
  } else {
    // Añade la clase para mostrar mensajes de error
    form.classList.add('was-validated');
  }
}