import express from 'express';
import cors from 'cors';
import * as controlador from './controladorApi.mjs';

const rutasApi = express.Router();

rutasApi.get('/api/v1/productos', cors(), controlador.traerTodos);
rutasApi.get('/api/v1/productos/:id', cors(), controlador.traerUno);

export default rutasApi;
