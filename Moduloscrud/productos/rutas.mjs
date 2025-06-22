import express from 'express';
import cors from 'cors';
import * as controlador from './controlador.mjs';

const rutasCrud = express.Router();

rutasCrud.get('/api/v1/productos', cors(), controlador.traerTodos);
rutasCrud.get('/api/v1/productos/:id', cors(), controlador.traerUno);
rutasCrud.post('/api/v1/productos', cors(), controlador.crearUno);
rutasCrud.put('/api/v1/productos/:id', cors(), controlador.actualizarUno);
rutasCrud.delete('/api/v1/productos/:id', cors(), controlador.eliminarUno);

export default rutasCrud;
