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