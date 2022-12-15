import pool from '../db.js';

export const getUpdateGrades = async (_req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM docent');
    res.json(results);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
