const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

mongoose.connect('mongodb+srv://daviddb:Jean147258@cluster0.br7x1.mongodb.net/todoAppData?retryWrites=true&w=majority').then(() => {
    console.log('Connecter a la database');
});




const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');
const indexRouters = require('./routes/index');
app.use('/', indexRouters);
app.use(methodOverride('_method'));

const port = process.env.PORT;
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}`));

