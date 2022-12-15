import pool from '../db.js';

export const getSubjectsTrainer = async (req, res) => {
  try {
    const docentEmail = req.params.email;
    const [subjects] = await pool.query(
      'select * \
      from subjectU as su left join docent as d on su.idDocent=d.idDocent \
      where d.docentEmail=?',
      [docentEmail]
    );
    res.json(subjects);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
