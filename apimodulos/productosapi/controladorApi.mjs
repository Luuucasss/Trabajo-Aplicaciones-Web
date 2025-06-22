// Importamos el módulo que contiene la lógica de acceso a datos (modelo)
import * as modelo from "./modeloApi.mjs";

/**
 * Controlador: Obtener todos los productos (uso público /tienda)
 */
export async function traerTodos(req, res) {
  try {
    const datos = await modelo.traerTodos();

    // Si hay productos, se devuelven con código 200
    if (datos.length > 0) {
      return res.status(200).json(datos);
    } else {
      // Si no hay productos, se devuelve un 404
      return res.status(404).json({ error: "No se encontraron productos" });
    }
  } catch (error) {
    // Error interno del servidor
    return res.status(500).json({ error: error.message });
  }
}

/**
 * Controlador: Obtener un producto específico por ID
 */
export async function traerUno(req, res) {
  try {
    const id = parseInt(req.params.id);
    const datos = await modelo.traerUno(id);

    // Si se encuentra el producto, devolverlo
    if (datos.length > 0) {
      return res.status(200).json(datos);
    } else {
      return res.status(404).json({ error: "No se encontraron productos" });
    }
  } catch (error) {
    // En caso de error en la base o en la conversión del ID
    return res.status(500).json({ error: error.message });
  }
}
