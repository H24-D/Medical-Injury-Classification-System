const db = require('../db'); 
const { v4: uuidv4 } = require('uuid'); 
exports.getAllInjuries = async (req, res) => { 
const [rows] = await db.query('SELECT * FROM injury_dictionary'); 
res.json(rows); 
}; 
exports.getInjuryById = async (req, res) => { 
const [rows] = await db.query('SELECT * FROM injury_dictionary WHERE id = ?', [req.params.id]); 
rows.length ? res.json(rows[0]) : res.status(404).send('Not found'); 
}; 
exports.createInjury = async (req, res) => { 
const { term, category, field } = req.body; 
const id = uuidv4(); 
await db.query('INSERT INTO injury_dictionary (id, term, category, field) VALUES (?, ?, ?, ?)', [id, term, category, field]); 
res.status(201).send({ id, term, category, field }); 
}; 
exports.updateInjury = async (req, res) => { 
const { term, category, field } = req.body; 
await db.query('UPDATE injury_dictionary SET term=?, category=?, field=? WHERE id=?', [term, category, field, req.params.id]); 
res.send('Updated'); 
}; 
exports.deleteInjury = async (req, res) => { 
await db.query('DELETE FROM injury_dictionary WHERE id=?', 
[req.params.id]); 
res.send('Deleted'); 
}; 
exports.searchInjuries = async (req, res) => {
  const search = `${req.query.q.toLowerCase().trim()}%`;
  try {
    const [rows] = await db.query(
      `SELECT * FROM injury_dictionary 
       WHERE LOWER(term) LIKE ? 
       OR LOWER(category) LIKE ? 
       OR LOWER(field) LIKE ?`, 
      [search, search, search]
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error searching injuries');
  }
};