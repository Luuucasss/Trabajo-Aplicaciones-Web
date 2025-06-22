import pool from '../../Moduloscrud/conexion.bd.mjs';

export async function traerTodos() {
  try {
    const resultado = await pool.query('SELECT * FROM productos');
    return resultado.rows;
  } catch (error) {
    throw new Error('Error al traer todos los productos: ' + error.message);
  }
}

export async function traerUno(id) {
  try {
    const resultado = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
    return resultado.rows;
  } catch (error) {
    throw new Error('Error al traer producto: ' + error.message);
  }
}

export async function crearUno({ titulo, autor, disponible }) {
  try {
    const resultado = await pool.query(
      'INSERT INTO productos (nombre,marca,precio,descripcion,imagen) VALUES ($1, $2, $3) RETURNING *',
      [nombre,marca,precio,descripcion,imagen]
    );
    return resultado.rows[0];
  } catch (error) {
    throw new Error('Error al crear producto: ' + error.message);
  }
}

export async function actualizarUno(id, { nombre,marca,precio,descripcion,imagen }) {
  try {
    const resultado = await pool.query(
      'UPDATE productos SET nombre=$1, marca=$2, precio=$3 WHERE id=$4 RETURNING *',
      [nombre,marca,precio,descripcion,imagen, id]
    );
    return resultado.rows[0];
  } catch (error) {
    throw new Error('Error al actualizar producto: ' + error.message);
  }
}

export async function eliminarUno(id) {
  try {
    const resultado = await pool.query(
      'DELETE FROM productos WHERE id=$1 RETURNING *',
      [id]
    );
    return resultado.rows[0];
  } catch (error) {
    throw new Error('Error al eliminar producto: ' + error.message);
  }
}
