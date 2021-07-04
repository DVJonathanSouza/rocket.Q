// Importando o "express"
const express = require('express');
// Importando o "route.js"
const route = require('./route.js');
// Importando o "path"
const path = require('path');
const exp = require('constants');

// Criando um server. Este server vai vai ser o "express" iniciado
// O "()" esta execulta o "express"
const server = express();

// Definindo que o "ejs" vai ser o responsavel pela nossa "view engine"
server.set('view engine', 'ejs');

// Definindo para nosso "serve" usar a pasta "public"
// O "express.static" defini que use arquivos estaticos, ..
// ..assim nao eh nessesario mudar os caminhos das pastas de css etc
server.use(express.static("public"));

// Definindo para o "express" onde esta nossa pasta "views"
server.set('views', path.join(__dirname, 'views'));

// Estamos fazendo uma decodificacao das informacoes, para ai sim enviar para o "controllles"
server.use(express.urlencoded({ extemded: true }));

// Solicitando ao "express" para usar o "route.js" 
server.use(route);

// Passando uma porta para o servidor do node
// o "listen" fica no express, por isso estamos chamando "server" 1
// "() => eh arrowfuction" fala para o JS que estaremos rodando algo, eh uma funcao simplificada
server.listen(3000, () => console.log("RODANDO"));