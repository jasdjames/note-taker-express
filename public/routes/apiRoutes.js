
const path = require('path');
// const getNotes = require('../assets/js/index')

// ROUTING

module.exports = (app) => {

app.get('/api/notes', (req, res) => { 
    res.sendFile(path.join(__dirname, '/db/db.json'));
});

// app.post('/api/notes', (req, res) => {
//     db.json(getNotes);
// });
};

