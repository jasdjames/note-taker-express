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
app.use(express.static('public'))
require('./public/routes/apiRoutes')(app);
require('./public/routes/htmlRoutes')(app);





app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
