const paises = [
  { nombre: "EEUU", codigo: "+1", iso: "us", idioma: "en", paisCode: "US", telefonoLongitud: 10 },
  { nombre: "México", codigo: "+52", iso: "mx", idioma: "es", paisCode: "MX", telefonoLongitud: 10 },
  { nombre: "España", codigo: "+34", iso: "es", idioma: "es", paisCode: "ES", telefonoLongitud: 9 },
  { nombre: "Argentina", codigo: "+54", iso: "ar", idioma: "es", paisCode: "AR", telefonoLongitud: 10 }
];

const selectedOption = document.getElementById('selected-option');
const optionsContainer = document.getElementById('options-container');
const telefonoInput = document.getElementById('telefono');
const feedback = telefonoInput.nextElementSibling;

// Función global para validar la longitud del teléfono
function validarLongitudTelefono() {
  const codigoPaisSeleccionado = selectedOption.innerText.trim().split(" ")[0]; // Obtener solo el código de país
  const country = paises.find(p => p.codigo === codigoPaisSeleccionado); // Buscar país según el código
  const maxLength = country ? country.telefonoLongitud : 0;
  
  // Eliminamos los espacios para la validación
  const telefonoValorSinEspacios = telefonoInput.value.replace(/\s+/g, '');

  // Comprobación de longitud
  if (telefonoValorSinEspacios.length === 0) {
     // Si el input está vacío
     telefonoInput.classList.remove('is-invalid', 'is-valid');
     telefonoInput.setCustomValidity("Este campo es obligatorio."); // Mensaje nativo para HTML5
     feedback.textContent = 'Este campo es obligatorio.'; // Mensaje de error personalizado
     feedback.classList.add('invalid-feedback'); // Añadir la clase invalid-feedback
     feedback.style.fontWeight = 'bold';
     feedback.style.display = 'block'; // Mostrar el mensaje de error
  } else if (telefonoValorSinEspacios && !/^\d+$/.test(telefonoValorSinEspacios)) {
    // Comprobación de que el valor solo contenga números
    telefonoInput.classList.add('is-invalid');
    telefonoInput.classList.remove('is-valid');
    telefonoInput.setCustomValidity('El teléfono debe contener solo números.');
    feedback.textContent = 'El teléfono debe contener solo números.';
    feedback.classList.add('invalid-feedback');
    feedback.style.fontWeight = 'bold';
    feedback.style.display = 'block';
  } else if (telefonoValorSinEspacios.length !== maxLength) {
    // Si el input no cumple con la longitud
    telefonoInput.classList.add('is-invalid');
    telefonoInput.classList.remove('is-valid');
    telefonoInput.setCustomValidity(`El número debe tener ${maxLength} caracteres.`);
    feedback.textContent = `El número debe tener ${maxLength} caracteres.`; // Mensaje de error personalizado
    feedback.classList.add('invalid-feedback');
    feedback.style.fontWeight = 'bold';
    feedback.style.display = 'block'; // Mostrar el mensaje de error
  } else {
    // Si el input es válido
    telefonoInput.classList.remove('is-invalid');
    telefonoInput.classList.add('is-valid');
    telefonoInput.setCustomValidity(''); // Eliminar mensajes de error
    feedback.textContent = ''; // Limpiar el mensaje
    feedback.style.display = 'none'; // Ocultar el mensaje de error
    feedback.classList.remove('invalid-feedback');

    // Formatear el número de teléfono
    telefonoInput.value = formatearTelefono(telefonoValorSinEspacios, codigoPaisSeleccionado);
  }
}

// Función para formatear el número de teléfono según el país
function formatearTelefono(numero, codigoPais) {
  // Eliminamos todo lo que no sea un número
  numero = numero.replace(/\D/g, '');

  // Buscamos el país seleccionado
  const pais = paises.find(p => p.codigo === codigoPais);
  if (!pais) return numero; // Si no encontramos el país, devolvemos el número sin cambios

  switch (pais.paisCode) {
    case "US":
      // Formato de EE.UU: (555) 123-4567
      return numero.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    case "ES":
      // Formato de España: 66 123 45 67
      return numero.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
    case "MX":
      // Formato de México: 55 1234 5678
      return numero.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2 $3');
    case "AR":
      // Formato de Argentina: 011 15 1234 5678 o +54 9 11 1234 5678
      if (numero.length === 10) {
        return numero.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '$1 $2 $3 $4');
      } else {
        return numero.replace(/(\d{2})(\d{1})(\d{1})(\d{4})(\d{4})/, '$1 $2 $3 $4 $5');
      }
    default:
      return numero;
  }
}

// Lógica dentro de DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  // Generar opciones dinámicamente
  paises.forEach(pais => {
    const optionDiv = document.createElement('div');
    optionDiv.classList.add('option');
    optionDiv.innerHTML = `
      <span class="flag-icon flag-icon-${pais.iso}"></span>
      <span style="width: 100%;">${pais.codigo} - ${pais.nombre}</span>
    `;
    optionsContainer.appendChild(optionDiv);

    // Evento para seleccionar una opción
    optionDiv.addEventListener('click', () => {
      selectedOption.innerHTML = optionDiv.innerHTML;
      optionsContainer.style.display = 'none'; // Cerrar el menú

      // Obtener el país seleccionado
      const country = paises.find(p => p.iso === pais.iso);
      
      // Actualizar el maxlength del campo de teléfono según el país seleccionado
      telefonoInput.maxLength = country.telefonoLongitud;

      if (telefonoInput.value.length > 0) {
        validarLongitudTelefono();
      }
    });
  });

  // Mostrar/ocultar las opciones al hacer clic
  selectedOption.addEventListener('click', () => {
    const isVisible = optionsContainer.style.display === 'block';
    optionsContainer.style.display = isVisible ? 'none' : 'block';
  });

  // Cerrar el menú si haces clic fuera
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.custom-select')) {
      optionsContainer.style.display = 'none';
    }
  });

  // Determinar el país predeterminado según el idioma y país del navegador
  const idiomaNavegador = navigator.language || navigator.languages[0]; // Ejemplo: "es-ES" o "es-MX"
  const codigoPaisNavegador = idiomaNavegador.split('-')[1]; // Si el idioma es "es-ES", toma "ES"
  
  // Buscar país en la lista usando tanto idioma como código de país
  const paisPredeterminado = paises.find(pais => 
    pais.idioma === idiomaNavegador.split('-')[0] && pais.paisCode === codigoPaisNavegador
  );

  if (paisPredeterminado) {
    // Establecer la opción predeterminada según el idioma y el código del país del navegador
    selectedOption.innerHTML = `
      <span class="flag-icon flag-icon-${paisPredeterminado.iso}"></span>
      <span style="width: 100%;">${paisPredeterminado.codigo} - ${paisPredeterminado.nombre}</span>
    `;

    // Actualizar el maxlength del campo de teléfono según el país predeterminado
    telefonoInput.maxLength = paisPredeterminado.telefonoLongitud;
  } else {
    console.log("No se encontró coincidencia exacta para el idioma y país");
  }

  // Asignar validación de longitud y formato a los campos de nombre y correo
  document.getElementById('nombre').addEventListener('input', function() {
    validarNombre();
  });
  document.getElementById('email').addEventListener('input', function() {
    validarEmail();
  });

  // Asignar validación de longitud de teléfono a eventos
  telefonoInput.addEventListener('blur', validarLongitudTelefono);
  telefonoInput.addEventListener('input', validarLongitudTelefono);
});