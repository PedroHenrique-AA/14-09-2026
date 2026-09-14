import express from 'express';
import { frutaRouter } from './routes/fruta.routes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use("/fruta", frutaRouter);

app.listen(port, () => {
  console.log(`App rodando em http://localhost:3000`);
})

