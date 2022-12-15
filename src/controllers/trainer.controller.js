import pool from '../db.js';

export const getSubjectsTrainer = async (req, res) => {
  try {
    const docentEmail = req.params.email;
    const [subjects] = await pool.query(
      'select S.subjectName \
      from docent as D join subjectU as S on D.idDocent = S.idDocent \
        where D.docentEmail=?',
      [docentEmail]
    );
    res.json(subjects);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
