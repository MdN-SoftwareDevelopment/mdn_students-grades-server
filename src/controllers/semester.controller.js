import pool from '../db.js';

export const getSemester = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const [subjects] = await pool.query(
      'SELECT S.subjectName, \
      concat(D.docentName, " ", D.docentLastName) AS docentFullName, \
      S.idSubject \
      FROM student AS St join studentSubject AS SS \
      ON St.idStudent = SS.idStudent JOIN subjectU AS S \
      ON SS.idSubject = S.idSubject JOIN docentSubject AS DS \
      ON S.idSubject = DS.idSubject JOIN docent AS D \
      ON DS.idDocent = D.idDocent \
      WHERE St.studentEmail= ?;',
      [userEmail]
    );
    res.json(subjects);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
