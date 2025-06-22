import * as modelo from './modelo.mjs';

export async function traerTodos(req, res) {
  try {
    const datos = await modelo.traerTodos();
    if (datos.length > 0) {
      return res.status(200).json(datos);
    }
    return res.status(404).json({ error: "No se encontraron productos" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function traerUno(req, res) {
  try {
    const id = parseInt(req.params.id);
    const datos = await modelo.traerUno(id);
    if (datos.length > 0) {
      return res.status(200).json(datos[0]);
    }
    return res.status(404).json({ error: "Producto no encontrado" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function crearUno(req, res) {
  try {
    const nuevo = await modelo.crearUno(req.body);
    return res.status(201).json(nuevo);
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al crear producto', error: error.message });
  }
}

export async function actualizarUno(req, res) {
  try {
    const id = parseInt(req.params.id);
    const actualizado = await modelo.actualizarUno(id, req.body);
    return res.json(actualizado);
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al actualizar', error: error.message });
  }
}

export async function eliminarUno(req, res) {
  try {
    const id = parseInt(req.params.id);
    const eliminado = await modelo.eliminarUno(id);
    if (!eliminado) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    return res.json({ mensaje: 'Producto eliminado', eliminado });
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al eliminar', error: error.message });
  }
}
