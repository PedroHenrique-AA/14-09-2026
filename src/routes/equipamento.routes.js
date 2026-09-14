import { Router } from "express";
import { equipamentoService } from '../services/equipamento.services.js';

export const equipamentoRouter = Router();

//SELECT
equipamentoRouter.get("/", async (req, res) => {
  try {
    const equipamentos = await equipamentoService.listarEquipamentos()
    res.json(equipamentos)
  }catch (error) {
    console.error(error);
  }
  try {
    const equipamentos = await equipamentoService.buscarEquipamentoPorId(id)
    res.json(equipamentos)
  }catch (error) {
    console.error(error);
  }
})
//INSERT
equipamentoRouter.post("/", async (req, res) => {
  try {
    const equipamentos = await equipamentoService.criarEquipamento({
      nome: "MacBook Pro",
      categoria: "Informática",
      condicao_uso: "Novo",
      disponivel: true
    })
    res.json(equipamentos)
  }catch (error) {
    console.error(error);
  }
})
//UPDATE
equipamentoRouter.patch("/", async (req, res) => {
  try {
    const equipamentos = await equipamentoService.alterarDisponibilidadeEquipamento(id, disponivel)
    res.json(equipamentos)
  }catch (error) {
    console.error(error);
  }
})