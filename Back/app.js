// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  // Ici, tu traites et sécurises les données, puis tu envoies un email ou stockes dans la base
  res.json({message: 'Votre message a bien été envoyé !'});
});

app.listen(3000, () => console.log('Serveur backend lancé sur le port 3000'));
