import { Router } from "express";
import { equipamentoService } from '../services/equipamento.services.js';

export const equipamentoRouter = Router();

//SELECT
equipamentoRouter.get("/equipamento", async (req, res) => {
  try {
    const equipamentos = await equipamentoService.listarEquipamentos()
    res.json(equipamentos)
  }catch (error) {
    console.error(error);
  }
});
//SELECT ÚNICO
equipamentoRouter.get("/equipamento/:id", async (req, res) => {
  try {
    const equipamentos = await equipamentoService.buscarEquipamentoPorId(id)
    res.json(equipamentos)
  }catch (error) {
    console.error(error);
  }
});
//INSERT
equipamentoRouter.post("/equipamento", async (req, res) => {
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
});
//UPDATE DISPONIVEL
equipamentoRouter.patch("/equipamento/:id/disponivel", async (req, res) => {
  try {
    const equipamentos = await equipamentoService.disponivel(req.params.id, req.body.disponivel)
    res.json(equipamentos)
  }catch (error) {
    console.error(error);
  }
});
//UPDATE INDISPONIVEL
equipamentoRouter.patch("/equipamento/:id/indisponivel", async (req, res) => {
  try {
    const equipamentos = await equipamentoService.indisponivel(req.params.id, req.body.disponivel)
    res.json(equipamentos)
  }catch (error) {
    console.error(error);
  }
});