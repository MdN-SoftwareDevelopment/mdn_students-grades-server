import pool from '../db.js';

export const getSubjects = async (_req, res) => {
  try {
    const [results] = await pool.query(
      'SELECT S.subject_name AS Materia, \
      CONCAT(D.docent_name," " , D.docent_last_name) AS Docente, \
      A.activity_name AS Actividad, A.grade AS Nota, A.feedback AS Feedback \
      FROM activity AS A JOIN subject_U AS S ON A.id_subject = S.id_subject \
      JOIN docents_subjects AS DS ON S.id_subject = DS.id_subject \
      JOIN docent AS D ON DS.id_docent = D.id_docent \
      WHERE S.subject_name = "Ingles";'
    );
    res.json(results);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
