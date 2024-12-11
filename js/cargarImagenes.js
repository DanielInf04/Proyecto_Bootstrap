document.addEventListener('DOMContentLoaded', function() {
    let pagina = 1; // Página inicial para cargar imágenes
  
    // Tu clave de API de Google Translate
    const API_KEY = 'AIzaSyD5nSIbULY2FjipsScH2A7jqbzMLxGATi0';
  
    // Función para traducir el texto utilizando la API de Google Translate
    async function traducirTexto(texto, idiomaDestino = 'es') {
      try {
        const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: texto,
            target: idiomaDestino, // Idioma al que quieres traducir
          }),
        });
  
        const data = await response.json();
        
        if (data.data && data.data.translations.length > 0) {
          return data.data.translations[0].translatedText; // Texto traducido
        } else {
          return texto; // Si no se puede traducir, devuelve el texto original
        }
      } catch (error) {
        console.error('Error al traducir:', error);
        return texto; // Devuelve el texto original en caso de error
      }
    }
  
    // Función para cargar imágenes
    function cargarImagenes() {
      const spinner = document.getElementById('spinner-carga');
      const botonCargar = document.getElementById('boton-cargar');
      
      // Si estamos en la segunda página o más, mostramos el spinner y ocultamos el botón
      if (pagina > 1) {
        spinner.style.display = 'block';
        botonCargar.style.display = 'none';
      }
  
      // Realizar la búsqueda de imágenes relacionadas con Ushuaia, Argentina
      fetch(`https://api.unsplash.com/search/photos?page=${pagina}&per_page=9&query=ushuaia+argentina&client_id=Jztd-ynMY5f8pGBu8_z1-g-KL9xw3K9QufEsT0Lp020`)
        .then(response => response.json())
        .then(data => {
          const contenedorGaleria = document.getElementById('galeria-imagenes');
          
          // Verifica si hay resultados en la respuesta
          if (data.results && data.results.length > 0) {
            data.results.forEach(imagen => {
              // Traducir la descripción de la imagen usando la API de Google Translate
              traducirTexto(imagen.alt_description || 'Ushuaia Argentina').then(descripcionTraducida => {
                // Convertir la primera letra a mayúscula
                descripcionTraducida = descripcionTraducida.charAt(0).toUpperCase() + descripcionTraducida.slice(1);
  
                // Crear el div de la tarjeta con clases de Bootstrap
                const col = document.createElement('div');
                col.classList.add('col-12', 'col-md-4', 'mb-4');  // 3 columnas en pantallas medianas o más grandes, 1 columna en pantallas pequeñas
                
                // Crear la tarjeta
                const card = document.createElement('div');
                card.classList.add('card');
                
                const img = document.createElement('img');
                img.src = imagen.urls.small; // URL de la imagen
                img.alt = descripcionTraducida;
                img.classList.add('card-img-top'); // Estilo para imagen de la tarjeta
                
                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');
                
                const title = document.createElement('h5');
                title.classList.add('card-title');
                title.innerText = descripcionTraducida; // Mostrar la descripción traducida y capitalizada
  
                // Añadir los elementos al card
                cardBody.appendChild(title);
                card.appendChild(img);
                card.appendChild(cardBody);
                col.appendChild(card);
                contenedorGaleria.appendChild(col);
              });
            });
  
            // Ocultar spinner y mostrar el botón de cargar más imágenes después de 3 segundos
            if (pagina > 1) {
              setTimeout(() => {
                spinner.style.display = 'none';
                botonCargar.style.display = 'inline-block';
              }, 3000); // Retraso de 3 segundos
            }
          } else {
            console.log("No se encontraron imágenes de Ushuaia, Argentina.");
          }
        })
        .catch(error => console.error('Error al cargar las imágenes:', error));
    }
  
    // Inicializar la carga de las primeras imágenes
    cargarImagenes();
  
    // Cargar más imágenes cuando el usuario haga clic en el botón
    document.getElementById('cargar-mas').addEventListener('click', function() {
      pagina++; // Aumentar el número de página para cargar más imágenes
      cargarImagenes();
    });
  });