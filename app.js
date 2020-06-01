const twig = require('twig');
const express = require('express');
const request = require('request');

// var urlApi = "http://maxenced.alwaysdata.net/datas.json";');
var urlApi = "http://maxenced.alwaysdata.net/datas.json";

var app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));

// DECLARATION DES ROUTES
// Homepage
app.get('/', function(req, res) {
  request (urlApi, function(error, response, body) {
    var data = JSON.parse(body);
    res.render('pages/index.twig', { datas: data });
  });

});

// Cours
app.get('/les-cours', function(req, res) {
  request (urlApi, function(error, response, body) {
    var data = JSON.parse(body);
    res.render('pages/cours/index.twig', { datas: data });
  });
});

app.get('/les-cours/:niveau', function(req, res) {
  var niveauParam = req.params.niveau,
      niveau = null;

  request (urlApi, function(error, response, body) {
    var data = JSON.parse(body),
        render = false;

    data.niveaux.forEach(function(el) {
      if (niveauParam.toLowerCase() == el.slug.toLowerCase()) {
        render = true;
        res.render('pages/cours/niveau.twig', { datas: data, niveau: el.slug });
      }
    });
    if (!render) {
      res.render('pages/error.twig', { datas: data });
    }
  });
});

// Vidéos
app.get('/les-videos', function(req, res) {
  request (urlApi, function(error, response, body) {
    var data = JSON.parse(body);
    res.render('pages/video/index.twig', { datas: data });
  });
});

app.get('/les-videos/:niveau', function(req, res) {
  var niveauParam = req.params.niveau,
      niveau = null;

  request (urlApi, function(error, response, body) {
    var data = JSON.parse(body),
        render = false;

    data.niveaux.forEach(function(el) {
      if (niveauParam.toLowerCase() == el.slug.toLowerCase()) {
        render = true;
        res.render('pages/video/niveau.twig', { datas: data, niveau: el.slug });
      }
    });
    if (!render) {
      res.render('pages/error.twig', { datas: data });
    }
  });
});

// Exercices
app.get('/les-exercices', function(req, res) {
  request (urlApi, function(error, response, body) {
    var data = JSON.parse(body);
    res.render('pages/exercice/index.twig', { datas: data });
  });
});

app.get('/les-exercices/:niveau', function(req, res) {
  var niveauParam = req.params.niveau,
      niveau = null;

  request (urlApi, function(error, response, body) {
    var data = JSON.parse(body),
        render = false;

    data.niveaux.forEach(function(el) {
      if (niveauParam.toLowerCase() == el.slug.toLowerCase()) {
        render = true;
        res.render('pages/exercice/niveau.twig', { datas: data, niveau: el.slug });
      }
    });
    if (!render) {
      res.render('pages/error.twig', { datas: data });
    }
  });
});

// Questions
app.get('/les-questions', function(req, res) {
  request (urlApi, function(error, response, body) {
    var data = JSON.parse(body);
    res.render('pages/question/index.twig', { datas: data });
  });
});

// 404
app.get('*', function(req, res) {
  request (urlApi, function(error, response, body) {
    var data = JSON.parse(body);
    res.render('pages/error.twig', { datas: data });
  });
});

app.listen(app.settings.port);
