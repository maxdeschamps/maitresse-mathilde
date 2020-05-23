const twig = require('twig');
const express = require('express');
const request = require('request');

const classes = require('./modules/classes');

var app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));

// DECLARATION DES ROUTES
// Homepage
app.get('/', function(req, res) {
  res.render('pages/index.twig', { niveaux: classes.niveaux });
});

// Cours
app.get('/les-cours', function(req, res) {
  res.render('pages/cours/index.twig', { niveaux: classes.niveaux });
});

app.get('/les-cours/:niveau', function(req, res) {
  var niveauParam = req.params.niveau,
      niveau = null;

  classes.niveaux.forEach(function(el) {
    if (el.toLowerCase() == niveauParam.toLowerCase()) {
      niveau = el;
    }
  });

  console.log(niveau)

  if (niveau) {
    res.render('pages/cours/niveau.twig', { niveaux: classes.niveaux, niveau: niveau });
  } else {
    res.render('pages/error.twig', { niveaux: classes.niveaux });
  }
});

// Vidéos
app.get('/les-videos', function(req, res) {
  res.render('pages/video/index.twig', { niveaux: classes.niveaux });
});

app.get('/les-videos/:niveau', function(req, res) {
  var niveauParam = req.params.niveau,
      niveau = null;

  classes.niveaux.forEach(function(el) {
    if (el.toLowerCase() == niveauParam.toLowerCase()) {
      niveau = el;
    }
  });

  if (niveau) {
    res.render('pages/video/niveau.twig', { niveaux: classes.niveaux, niveau: niveau });
  } else {
    res.render('pages/error.twig', { niveaux: classes.niveaux });
  }
});

// Exercices
app.get('/les-exercices', function(req, res) {
  res.render('pages/exercice/index.twig', { niveaux: classes.niveaux });
});

app.get('/les-exercices/:niveau', function(req, res) {
  var niveauParam = req.params.niveau,
      niveau = null;

  classes.niveaux.forEach(function(el) {
    if (el.toLowerCase() == niveauParam.toLowerCase()) {
      niveau = el;
    }
  });

  if (niveau) {
    res.render('pages/exercice/niveau.twig', { niveaux: classes.niveaux, niveau: niveau });
  } else {
    res.render('pages/error.twig', { niveaux: classes.niveaux });
  }
});

// Questions
app.get('/les-questions', function(req, res) {
  res.render('pages/question/index.twig');
});

// 404
app.get('*', function(req, res) {
  res.render('pages/error.twig', { niveaux: classes.niveaux });
});

app.listen(app.settings.port);
