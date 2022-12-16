import pool from '../db.js';

export const getUpdateGrades = async (req, res) => {
  try {
    const activity = req.params.idActivity;
    const [results] = await pool.query(
      'SELECT ASt.idActivityStudent, CONCAT(S.studentName, \
    " ", S.studentLastName) AS Student, \
    ASt.grade AS Grade, ASt.feedback AS Feedback \
    FROM activity AS A JOIN activityStudent AS ASt \
    ON A.idActivity = ASt.idActivity JOIN studentSubject AS SS \
    ON ASt.idStudentSubject = SS.idStudentSubject JOIN student AS S \
    ON SS.idStudent = S.idStudent \
    WHERE A.idActivity = ?',
      [activity]
    );
    res.json(results);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
