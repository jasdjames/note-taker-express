const path = require('path');
// const renderNoteList= require('../assets/js');


module.exports = (app) => {

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname, '../notes.html'));
});

// If no matching route is found default to home

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})

// app.post ('/notes', (req, res) => {



// });

};