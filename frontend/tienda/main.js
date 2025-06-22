const contenedor = document.getElementById("productos");

fetch("/api/v1/productos")
  .then(res => res.json())
  .then(data => {
    contenedor.innerHTML = ""; // limpiar
    if (data.error) {
      contenedor.innerHTML = `<p class="text-center text-danger">${data.error}</p>`;
      return;
    }
    data.forEach(p => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
          <div class="card-body">
            <h5 class="card-title">${p.nombre}</h5>
            <p class="card-text"><strong>Marca:</strong> ${p.marca}</p>
            <p class="card-text"><strong>Precio:</strong> $${p.precio.toFixed(2)}</p>
            <p class="card-text">${p.descripcion}</p>
          </div>
        </div>
      `;
      contenedor.appendChild(card);
    });
  })
  .catch(() => {
    contenedor.innerHTML = `<p class="text-center text-danger">Error al cargar productos</p>`;
  });

