import pool from '../db.js';

export const getAverageOfAllActivities = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const subjectName = req.params.subject;
    const [average] = await pool.query(
      'select avg(ASt.grade) as average\
      from student as S join studentSubject as SS on S.idStudent=SS.idStudent\
        join subjectU as SU on SS.idSubject=SU.idSubject\
        join activity as A on SU.idSubject=A.idSubject\
        join activityStudent as ASt on A.idActivity=ASt.idActivity\
      where S.studentEmail=? and SU.subjectName=?',
      [userEmail, subjectName]
    );
    res.json(average);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
