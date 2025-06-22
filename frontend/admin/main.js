// frontend/admin/main.js

const apiUrl           = "/api/v1/productos";
const tbody            = document.getElementById("tbodyProductos");
const form             = document.getElementById("formProducto");
const tituloInput      = document.getElementById("titulo");
const autorInput       = document.getElementById("autor");
const disponibleInput  = document.getElementById("disponible");
const idInput          = document.getElementById("idProducto");
const tituloModal      = document.getElementById("tituloModal");
const btnNuevo         = document.getElementById("btnNuevoProducto");

let productos = [];

async function cargarProductos() {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error("Error al obtener productos");
    productos = await res.json();
    renderizarTabla();
  } catch (error) {
    console.error(error);
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-danger">
          No se pudo cargar los productos
        </td>
      </tr>`;
  }
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
        <button class="btn btn-sm btn-warning me-1" onclick="editarProducto(${p.id})">
          ✏️
        </button>
        <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${p.id})">
          🗑️
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function abrirFormulario() {
  idInput.value           = "";
  tituloInput.value       = "";
  autorInput.value        = "";
  disponibleInput.checked = false;
  tituloModal.textContent = "Nuevo Producto";
  const modalEl = document.getElementById("modalProducto");
  new bootstrap.Modal(modalEl).show();
}

async function guardarProducto(e) {
  e.preventDefault();
  const producto = {
    titulo:     tituloInput.value.trim(),
    autor:      autorInput.value.trim(),
    disponible: disponibleInput.checked
  };

  const id     = idInput.value;
  const metodo = id ? "PUT" : "POST";
  const url    = id ? `${apiUrl}/${id}` : apiUrl;

  try {
    const res = await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto)
    });
    if (!res.ok) throw new Error("Error al guardar producto");
    await cargarProductos();
    bootstrap.Modal.getInstance(document.getElementById("modalProducto")).hide();
  } catch (error) {
    console.error(error);
    alert("Hubo un error al guardar el producto");
  }
}

function editarProducto(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;
  idInput.value           = producto.id;
  tituloInput.value       = producto.titulo;
  autorInput.value        = producto.autor;
  disponibleInput.checked = producto.disponible;
  tituloModal.textContent = "Editar Producto";
  const modalEl = document.getElementById("modalProducto");
  new bootstrap.Modal(modalEl).show();
}

async function eliminarProducto(id) {
  if (!confirm("¿Eliminar este producto?")) return;
  try {
    const res = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar producto");
    await cargarProductos();
  } catch (error) {
    console.error(error);
    alert("No se pudo eliminar el producto");
  }
}

// --- Eventos ---
form.addEventListener("submit", guardarProducto);
if (btnNuevo) btnNuevo.addEventListener("click", abrirFormulario);
document.addEventListener("DOMContentLoaded", cargarProductos);
