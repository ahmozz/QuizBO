//importer express
var express = require('express');

//importer le sys de path
var path = require('path');

//pour effecter les requetes
var bodyParser = require('body-parser');

//page index
var index = require('./routes/index');

//les données de mongodb
var quize = require('./routes/quize');

var port = 3000;

var app = express();

//View Engine
//le repertoire pour la vue
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//comment lire les fichiers html
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);

app.use('/liste', quize);

app.listen(port, function(){
    console.log('Server started on port '+port);
});
