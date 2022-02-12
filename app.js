const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const indexRouters = require('./routes/index');

app.set('view engine', 'pug');
mongoose.connect('mongodb+srv://daviddb:Jean147258@cluster0.br7x1.mongodb.net/todoAppData?retryWrites=true&w=majority').then(() => {
    console.log('Connecter a la database');
});
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRouters);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}`));

