// Création du serveur
const twig = require('twig');
const express = require('express');
const request = require('request');
// const mysql = require('mysql');

var app = express();
// Créer un port dynmaique pour la version en ligne OU le localhost
app.set('port', process.env.PORT || 3000);
// Une méthode pour fixer le problème de css sur les pages /page/
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));

// Lien vers l'API
// var urlApi = "http://maxenced.alwaysdata.net/cv.json";

// Connexion à la base de données
// var con = mysql.createConnection({
//   host: "mysql-maxenced.alwaysdata.net",
//   user: "maxenced",
//   password: "vP5kI0nT2i",
//   database: "maxenced_portfolio"
// });

// con.connect(function(err) {
//   if (err) throw err;
// });

// Déclaration des pages
// Homepage
app.get('/', function(req, res) {
  res.render('index.twig');
});

// À propos
// app.get('/a-propos', function(req, res) {
//   request (urlApi, function(error, response, body) {
//     var data = JSON.parse(body);
//     res.render('a-propos.twig', { data : data });
//   });
// });

// Projets
// app.get('/projets', function(req, res) {
//   // Récupération des informations concernant les sites
//   con.query('SELECT * FROM site', function (error, results, fields) {
//     if (error) throw error;
//     res.render('projets.twig', { sites: results });
//   });
// });

// Projet
// app.get('/projet/:url_site', function(req, res) {
//   var url_site = req.params.url_site;
//
//   con.query('SELECT * FROM site', function (error, results, fields) {
//     for (let i=0; i<results.length; i++) {
//       if (results[i].url_site == url_site) {
//         var site = results[i];
//       }
//     }
//     if (site.length != 0) {
//       // Récupérer les autres infos dans la bdd
//       console.log(site)
//       res.render('projet.twig', { site: site, sites: results });
//     } else {
//       res.render('error.twig');
//     }
//   });
//
// });

// // Contact
// app.get('/contact', function(req, res) {
//   request (urlApi, function(error, response, body) {
//     var data = JSON.parse(body);
//     res.render('contact.twig', { contacts : data.contact });
//   });
// });

// 404
app.get('*', function(req, res) {
  res.render('error.twig');
});

// Écouter le port dynamique
app.listen(app.settings.port);
