import pool from '../db.js';

export const getSubjects = async (req, res) => {
  try {
    const subject = req.params.subject;
    const [results] = await pool.query(
      'SELECT S.subjectName AS SubjectU,\
      CONCAT(D.docentName, " " , D.docentLastName) AS Docent, \
      A.activityName AS Activity, ASt.grade AS Grade, ASt.feedback AS Feedback \
      FROM docent AS D JOIN docentSubject AS DS \
      ON D.idDocent = DS.idDocent JOIN subjectU AS S \
      ON DS.idSubject = S.idSubject JOIN studentSubject AS SS \
      ON S.idSubject = SS.idSubject JOIN activityStudent AS ASt \
      ON SS.idStudentSubject = ASt.idStudentSubject JOIN activity AS A \
      ON ASt.idActivity = A.idActivity \
      WHERE S.idSubject = ?;',
      [subject]
    );
    res.json(results);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
