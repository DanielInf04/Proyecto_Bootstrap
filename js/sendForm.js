function showModal(event) {
  event.preventDefault(); // Evita el envío del formulario
  
  // Validar el formulario
  var form = document.getElementById('contact-form');
  
  // Si el formulario es válido, mostramos el modal
  if (form.checkValidity()) {
    var myModal = new bootstrap.Modal(document.getElementById('modalSuccess'), {
      keyboard: false
    });
    myModal.show();
    
    // Limpiamos el formulario después de un breve retraso
    setTimeout(function() {
      form.reset(); // Limpiar el formulario después de mostrar el modal
    }, 1000); // Retraso de 1 segundo para no limpiar antes de que el modal se muestre
  } else {
    // Si el formulario no es válido, mostramos la validación visual
    form.classList.add('was-validated');
  }
}