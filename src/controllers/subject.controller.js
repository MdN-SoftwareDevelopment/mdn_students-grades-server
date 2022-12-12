import pool from '../db.js';

export const getSubjects = async (_req, res) => {
  try {
    const [results] = await pool.query(
      'SELECT S.subjectName AS SubjectU, \
      CONCAT(D.docentName," " , D.docentLastName) AS Docent, \
      A.activityName AS Activity, A.grade AS Grade, A.feedback AS Feedback\
      FROM activity AS A JOIN subjectU AS S \
      ON A.idSubject = S.idSubject JOIN docent AS D\
      ON S.idDocent = D.idDocent\
      WHERE S.subjectName = "Ingles I";'
    );
    res.json(results);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
