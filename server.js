// Dependencies

const express = require('express');
const path = require('path');
// const getAndRenderNotes = require('./public/assets/js/index')


// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsinrg
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./public/routes/apiRoutes')(app);
require('./public/routes/htmlRoutes')(app);



// Star Wars Characters (DATA)

// const characters = [
//   {
//     routeName: 'yoda',
//     name: 'Yoda',
//     role: 'Jedi Master',
//     age: 900,
//     forcePoints: 2000,
//   },
//   {
//     routeName: 'darthmaul',
//     name: 'Darth Maul',
//     role: 'Sith Lord',
//     age: 200,
//     forcePoints: 1200,
//   },
//   {
//     routeName: 'obiwankenobi',
//     name: 'Obi Wan Kenobi',
//     role: 'Jedi Master',
//     age: 55,
//     forcePoints: 1350,
//   },
// ];

// Routes

// Basic route that sends the user first to the AJAX Page
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));


// Displays the database of notes
// app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, '/db/db.json')));



  /* Check each character routeName and see if the same as "chosen"
   If the statement is true, send the character back as JSON,
   otherwise tell the user no character was found */

//   for (let i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// Append what the person types to an li in the ul - list group - then post 
// app.post('/api/notes', (req, res) => {
//   const newNote = req.li
// app.post('/api/notes', (req, res) => db.json(getAndRenderNotes));



  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
//   const newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();
//   console.log(newCharacter);

//   characters.push(newCharacter);
//   res.json(newCharacter);
// });

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
