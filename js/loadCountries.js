document.addEventListener('DOMContentLoaded', function () {
  const paises = [
    { nombre: "Estados Unidos", codigo: "+1", iso: "us", idioma: "en", paisCode: "US", telefonoLongitud: 10 },
    { nombre: "México", codigo: "+52", iso: "mx", idioma: "es", paisCode: "MX", telefonoLongitud: 10 },
    { nombre: "España", codigo: "+34", iso: "es", idioma: "es", paisCode: "ES", telefonoLongitud: 9 },
    { nombre: "Argentina", codigo: "+54", iso: "ar", idioma: "es", paisCode: "AR", telefonoLongitud: 10 }
  ];

  const selectedOption = document.getElementById('selected-option');
  const optionsContainer = document.getElementById('options-container');
  const telefonoInput = document.getElementById('telefono');

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

      // Actualizar el maxlength del campo de teléfono según el país seleccionado
      const country = paises.find(p => p.iso === pais.iso);
      telefonoInput.maxLength = country.telefonoLongitud;
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
  
  // Intentar obtener el código de país del idioma del navegador (por ejemplo, "ES" de "es-ES")
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
    // Si no se encuentra coincidencia exacta, puedes manejar el caso aquí
    console.log("No se encontró coincidencia exacta para el idioma y país");
  }
});