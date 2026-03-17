const express = require('express'); 
const cors = require('cors'); 
const injuryRoutes = require('./routes/injuryRoutes'); 
require('dotenv').config(); 
const app = express(); 
app.use(cors()); 
app.use(express.json()); 
app.use('/api/injuries', injuryRoutes); 
// Auto-create table if not exists
db.query(`
  CREATE TABLE IF NOT EXISTS injury_dictionary (
    id VARCHAR(36) PRIMARY KEY,
    term VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    field VARCHAR(100) NOT NULL
  )
`).then(() => {
  console.log('Table ready');
}).catch(err => {
  console.error('Table creation error:', err);
});
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
