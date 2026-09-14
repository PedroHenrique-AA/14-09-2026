import { pool } from '../database/db.js'

class FrutaService {
    async listarFrutas() {
        const res = await pool.query('SELECT * FROM fruta');
        return res.rows;
    }
}

export const frutaService = new FrutaService();