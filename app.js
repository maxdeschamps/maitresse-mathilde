const twig = require('twig');
const express = require('express');
const request = require('request');

var app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));

// DECLARATION DES ROUTES
// Homepage
app.get('/', function(req, res) {
  res.render('pages/index.twig');
});

// Cours
app.get('/les-cours', function(req, res) {
  res.render('pages/cours/index.twig');
});

// Vidéos
app.get('/les-videos', function(req, res) {
  res.render('pages/video/index.twig');
});

// Exercices
app.get('/les-exercices', function(req, res) {
  res.render('pages/exercice/index.twig');
});

// Questions
app.get('/les-questions', function(req, res) {
  res.render('pages/question/index.twig');
});

// 404
app.get('*', function(req, res) {
  res.render('pages/error.twig');
});

app.listen(app.settings.port);
