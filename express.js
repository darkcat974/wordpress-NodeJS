const fs = require('fs');
const express = require('node:express');
const hostname = '127.0.0.1';
const port = 3000;
const server = express.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  console.log('serveur créer');
  const path = req.url.toString()

  if (path == '/accueil') {
      console.log("Vous êtes a l’accueil");
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write('<p>Bienvenue sur l’accueil</p>')
      res.end();
  }
  if (path == '/profil') {
      console.log("Vous êtes sur votre profil");
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write('<p>Bienvenue sur votre profile</p>')
      res.end();
  }
  if (path == '/Logo') {
      console.log("Vous êtes au logo");
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write('<img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Epitech.png">')
      res.end();
  }

});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});