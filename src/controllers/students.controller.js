import pool from '../db.js';

export const getStudents = async (_req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM students');
    res.json(results);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
