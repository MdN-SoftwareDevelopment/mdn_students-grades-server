import pool from '../db.js';

export const getSemester = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const [subjects] = await pool.query(
      'select su.subjectName, concat(d.docentName, " ", d.docentLastName) \
      as docentFullName from subjectU as su \
      right join studentSubjects as ss on su.idSubject=ss.idSubject\
      left join student as s on ss.idStudent=s.idStudent\
      left join docent as d on su.idDocent=d.idDocent\
      where s.studentEmail=?',
      [userEmail]
    );
    res.json(subjects);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
