const contenedor = document.getElementById("productos");

fetch("/api/v1/productos")
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      contenedor.innerHTML = `<p class="text-center text-danger">${data.error}</p>`;
      return;
    }

    data.forEach(p => {
      const card = document.createElement("div");
      card.className = "col-md-4";

      card.innerHTML = `
        <div class="card h-100 shadow">
          <div class="card-body">
            <h5 class="card-title">${p.titulo}</h5>
            <p class="card-text"><strong>Autor:</strong> ${p.autor}</p>
            <p class="card-text"><strong>Disponible:</strong> ${p.disponible ? "Sí" : "No"}</p>
          </div>
        </div>
      `;

      contenedor.appendChild(card);
    });
  })
  .catch(() => {
    contenedor.innerHTML = `<p class="text-center text-danger">Error al cargar productos</p>`;
  });
