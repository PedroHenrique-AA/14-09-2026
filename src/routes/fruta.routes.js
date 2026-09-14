import { Router } from "express";
import { frutaService } from '../services/fruta.services.js';

export const frutaRouter = Router();

frutaRouter.get("/", async (req, res) => {
  try {
    const frutas = await frutaService.listarFrutas()
    res.json(frutas)
  }catch (error) {
    console.error(error);
  }
})