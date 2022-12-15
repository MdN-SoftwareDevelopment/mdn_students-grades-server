import pool from '../db.js';

export const getSemester = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const [subjects] = await pool.query(
      'select S.subjectName, S.semester,\
      concat(D.docentName, " ", D.docentLastName) as docentFullName\
      from docent as D right join subjectU as S on D.idDocent = S.idDocent\
      left join student as St on S.idSubject = St.idSubject\
      where St.studentEmail=?',
      [userEmail]
    );
    res.json(subjects);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
