import express from 'express';
import rutasApi from './apimodulos/productosapi/rutasApi.mjs'; // <- usa export default

import rutasCrud from './Moduloscrud/productos/rutas.mjs';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PUERTO = 3000;

app.use(express.json());
app.use('/admin', express.static(path.join(__dirname, 'frontend/admin')));
app.use('/tienda', express.static(path.join(__dirname, 'frontend/tienda')));


app.use(rutasApi);   // <- ahora sí son routers válidos
app.use(rutasCrud);

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});
