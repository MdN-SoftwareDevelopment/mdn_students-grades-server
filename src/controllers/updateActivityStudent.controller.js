import pool from '../db.js';

export const putUpdateActivityStudent = async (req, res) => {
  try {
    console.log(req.params);
    const idActivityStudent = req.params.idActivityStudent;
    const grade = req.body.grade;
    const feedback = req.body.feedback;
    const [results] = await pool.query(
      'update activityStudent \
      set grade = ?, feedback = ? \
      where activityStudent.idActivityStudent = ?;',
      [grade, feedback, idActivityStudent]
    );
    res.json(results);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
