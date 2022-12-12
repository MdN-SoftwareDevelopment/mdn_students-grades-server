import pool from '../db.js';

export const getSubjectsTrainer = async (_req, res) => {
  try {
    const [subjects] = await pool.query(
      'select * \
      from subjectU as su left join docent as d on su.idDocent=d.idDocent \
      where d.docentName="Mayerli"'
    );
    res.json(subjects);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
