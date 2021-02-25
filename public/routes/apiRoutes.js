
const path = require('path');
const fs = require('fs')
const noteData = require('../../db/db.json')
// ROUTING

module.exports = (app) => {

app.get('/api/notes', (req, res) => { 
res.json(noteData)
});




// // I know I need to export something from index and WriteFileSync so I need a FS
app.post('/api/notes', (req, res) => {
const dbPath = path.resolve(__dirname, '../../db/db.json')
const note = JSON.parse(fs.readFileSync(dbPath))

note.push(req.body);
console.log(note);
const writeNote = fs.writeFileSync(dbPath,JSON.stringify(note));
console.log('this it is!!',note);
res.json(note)
});
};

