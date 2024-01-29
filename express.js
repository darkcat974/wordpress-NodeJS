const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3001

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://noah:julWAvKT742ZCPXR@mydb.exhfxs3.mongodb.net/');

const { Schema } = mongoose;

const MyModel = mongoose.model('workshop', new Schema({id: {type: String, required: true}, student: {type: String, required: true}}))

mongoose.Promise = global.Promise


app.use(bodyParser.json());

app.get('/accueil', (req, res) => {
    console.log("Vous êtes a l’accueil");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<p>Bienvenue sur l’accueil</p>')
    res.end();
}
)

app.get('/profil', (req, res) => {
    console.log("Vous êtes sur votre profil");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<p>Bienvenue sur votre profile</p>')
    res.end();
}
)

app.get('/Logo', (req, res) => {
    console.log("Vous êtes au logo");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Epitech.png">')
    res.end();
}
)

app.get('/db', (req, res) => {
    console.log("mongotruc");
    MyModel.find().then((humeurs) => {return res.status(200).json({humeurs})});
}
)

app.get('/db2', (req, res) => {
    console.log("mongotruc");
    MyModel.findOne().then((humeurs) => {return res.status(200).json({humeurs})});
}
)

app.listen(port, () => {
  console.log('serveur crée');
})
