import { createServer } from 'node:http';
import { app } from "./Back/app.js";
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const server = createServer(app);
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
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api', app);


const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});