// Importamos la conexión al pool de PostgreSQL ya configurado
import pool from '../../Moduloscrud/conexion.bd.mjs';

/**
 * Modelo: obtener todos los productos de la tabla "productasos"
 */
export async function traerTodos() {
  try {
    const resultado = await pool.query('SELECT * FROM productos');
    return resultado.rows;
  } catch (error) {
    // Propagamos el error para que lo capture el controlador
    throw new Error('Error al consultar todos los productos: ' + error.message);
  }
}

/**
 * Modelo: obtener un producto por su ID
 * @param {number} id - ID del producto
 */
export async function traerUno(id) {
  try {
    const resultado = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
    return resultado.rows;
  } catch (error) {
    throw new Error('Error al consultar un producto: ' + error.message);
  }
}
