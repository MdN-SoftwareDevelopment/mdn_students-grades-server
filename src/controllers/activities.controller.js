import pool from '../db.js';

export const getAverageOfAllActivities = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const subjectName = req.params.subject;
    const [average] = await pool.query(
      'select avg(ASt.grade) as average\
      from activityStudent as ASt \
      left join studentSubject as SS on ASt.idStudentSubject=SS.idStudentSubject\
      left join student as S on SS.idStudent=S.idStudent\
      left join activity as A on ASt.idActivity=A.idActivity\
      left join subjectU as SU on SS.idStudent=S.idStudent\
      where SU.subjectName=? and S.studentEmail=?',
      [userEmail, subjectName]
    );
    res.json(average);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
