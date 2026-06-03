/* =========================================================
  ARCHIVO PRINCIPAL DE JAVASCRIPT
  - En este commit nos encargamos de:
    1. Leer el arreglo de ciudades del archivo data.js
    2. Renderizar una card por cada localidad
    3. Mostrar la información básica del clima en Home
========================================================= */

/* =========================================================
  REFERENCIA AL CONTENEDOR PRINCIPAL DE LAS CARDS
  - Aquí insertaremos dinámicamente el HTML generado
========================================================= */
const citiesGrid = document.getElementById("citiesGrid");

/* =========================================================
  FUNCIÓN: renderCities()
  - Recorre el arreglo weatherData
  - Crea una card Bootstrap por cada ciudad
  - Inserta cada card en el contenedor citiesGrid
========================================================= */
function renderCities() {
  /* Limpiamos el contenedor antes de renderizar */
  citiesGrid.innerHTML = "";

  /* Recorremos cada ciudad del arreglo */
  weatherData.forEach((city) => {
    /* Creamos la columna Bootstrap que contendrá la card */
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-lg-4";

    /* Insertamos el contenido HTML de la card */
    col.innerHTML = `
      <article class="card weather-card h-100 shadow-sm">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h3 class="h5 mb-1">${city.city}</h3>
              <p class="text-secondary mb-0">${city.region}</p>
            </div>
            <div class="weather-icon" aria-hidden="true">${city.icon}</div>
          </div>

          <p class="display-6 fw-bold mb-1">${city.temp}°C</p>
          <p class="text-secondary mb-3">${city.status}</p>

          <div class="mt-auto">
            <!--
              Este botón aún no tiene funcionalidad completa.
              En el commit 3 lo usaremos para mostrar el detalle.
            -->
            <button type="button" class="btn btn-primary w-100">
              Ver detalle
            </button>
          </div>
        </div>
      </article>
    `;

    /* Agregamos la card al contenedor principal */
    citiesGrid.appendChild(col);
  });
}

/* =========================================================
  EVENTO DOMContentLoaded
  - Espera a que el HTML esté completamente cargado
  - Luego ejecuta el render de las ciudades
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderCities();
});