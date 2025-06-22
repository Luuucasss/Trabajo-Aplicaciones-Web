const apiUrl = "/api/v1/productos";
const tbody = document.getElementById("tbodyProductos");
const form = document.getElementById("formProducto");
const tituloInput = document.getElementById("titulo");
const autorInput = document.getElementById("autor");
const disponibleInput = document.getElementById("disponible");
const idInput = document.getElementById("idProducto");
const tituloModal = document.getElementById("tituloModal");

let productos = [];

async function cargarProductos() {
  const res = await fetch(apiUrl);
  const data = await res.json();
  productos = data;
  renderizarTabla();
}

function renderizarTabla() {
  tbody.innerHTML = "";
  productos.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.id}</td>
      <td>${p.titulo}</td>
      <td>${p.autor}</td>
      <td>${p.disponible ? "✅" : "❌"}</td>
      <td>
        <button class="btn btn-sm btn-warning me-1" onclick="editarProducto(${p.id})">✏️</button>
        <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${p.id})">🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function abrirFormulario() {
  idInput.value = "";
  tituloInput.value = "";
  autorInput.value = "";
  disponibleInput.checked = false;
  tituloModal.textContent = "Nuevo Producto";
}

async function guardarProducto(e) {
  e.preventDefault();
  const producto = {
    titulo: tituloInput.value,
    autor: autorInput.value,
    disponible: disponibleInput.checked
  };

  const id = idInput.value;
  const metodo = id ? "PUT" : "POST";
  const url = id ? `${apiUrl}/${id}` : apiUrl;

  const res = await fetch(url, {
    method: metodo,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto)
  });

  if (res.ok) {
    await cargarProductos();
    bootstrap.Modal.getInstance(document.getElementById("modalProducto")).hide();
  }
}

function editarProducto(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  idInput.value = producto.id;
  tituloInput.value = producto.titulo;
  autorInput.value = producto.autor;
  disponibleInput.checked = producto.disponible;
  tituloModal.textContent = "Editar Producto";
  const modal = new bootstrap.Modal(document.getElementById("modalProducto"));
  modal.show();
}

async function eliminarProducto(id) {
  if (!confirm("¿Eliminar este producto?")) return;
  const res = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  if (res.ok) {
    await cargarProductos();
  }
}

cargarProductos();
