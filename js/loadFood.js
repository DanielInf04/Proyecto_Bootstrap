// Función para mostrar los resultados
function displayFood(data) {
    const foodResults = document.getElementById("foodResults");
    const noResults = document.getElementById("noResults");

    foodResults.innerHTML = ""; // Limpiar los resultados anteriores

    if (data.length > 0) {
      noResults.style.display = "none"; // Ocultar el mensaje de "no resultados"
      data.forEach(item => {
        const foodCard = document.createElement("div");
        foodCard.classList.add("col-md-6", "col-lg-4", "mb-4");
        foodCard.innerHTML = `
          <div class="card">
            <img src="${item.image}" class="card-img-top" alt="Imagen de comida">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
            </div>
          </div>
        `;
        foodResults.appendChild(foodCard);
      });
    } else {
      noResults.style.display = "block"; // Mostrar el mensaje de "no resultados"
    }
}

  // Función para filtrar los resultados
function filterFood() {
    const searchQuery = document.getElementById("searchFood").value.toLowerCase();
    const filteredFood = foodData.filter(item => 
      item.name.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery)
    );
    displayFood(filteredFood);
}

// Mostrar todos los alimentos cuando cargue la página
displayFood(foodData);