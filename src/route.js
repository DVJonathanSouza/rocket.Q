// Importando o "express"
const express = require('express');
// Importando o "QuestionController.js"
const QuestionController = require('./controllers/QuestionController');
// Importando o "RoomController.js"
const RoomController = require('./controllers/RoomController');

// Indicando que a "const route" guarde toda a funcionalidade que o "express" tem de "Router" e execute
const route = express.Router();

// Indicando nossa rota do "index", e informando que deve ser renderizado nesta URL a page "enter-room"
route.get('/', (req, res) => res.render("index", { page: 'enter-room' }));
// Indicando nossa rota do "index", e informando com uma variavel que deve ser renderizado nesta URL a page "create-pass"
route.get('/create-pass', (req, res) => res.render("index", { page: 'create-pass' }));
// Indicando nossa rota do "room"
// Lebrando que o ":" no comeco eh para informar para o "express" que nao sabemos o que vem na frente
// No lugar do ":room" sera o ID da sala que criamos
route.get('/room/:room', (req, res) => res.render("room"));

// ----Formato que o formulario de dentro da modal tem que passar a informacao
// Lebrando que o ":" no comeco eh para informar para o "express" que nao sabemos o que vem na frente
// Estamos enviando indiretamente req e res para a "QuestionController.index"
route.post('/question/:room/:question/:action', QuestionController.index);
// Estamos enviando indiretamente req e res para a "RoomController.index"
route.post('/create-room', RoomController.create);

// Para poder importando o arquivo "route.js"
module.exports = route