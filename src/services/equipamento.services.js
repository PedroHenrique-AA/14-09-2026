import { pool } from '../database/db.js'

class EquipamentoService {
    async listarEquipamentos() {
        const res = await pool.query('SELECT * FROM equipamento');
        return res.rows;
    }
    async buscarEquipamentoPorId(id) {
const res = await pool.query('SELECT * FROM equipamento WHERE id = $1', [id]);
        return res.rows[0];
    }
    async criarEquipamento(equipamento) {
        const { nome, categoria, condicao_uso, disponivel } = equipamento;
        const res = await pool.query(
            'INSERT INTO equipamento (nome, categoria, condicao_uso, disponivel) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, categoria, condicao_uso, disponivel]
        );
        return res.rows[0];
    }
    async alterarDisponibilidadeEquipamento(id, disponivel) {
        const res = await pool.query(
            'UPDATE equipamento SET disponivel = $1 WHERE id = $2 RETURNING *',
            [disponivel, id]
        );
        return res.rows[0];
    } 

}

export const equipamentoService = new EquipamentoService();