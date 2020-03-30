const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Rota / Recurso
 * ex: http://localhost:3333/users
 * obs: users é o recurso e oque vem antes é a rota
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar uma informação no back-end;
 * POST: Grava uma informação no back-end;
 * PUT: Altera uma informação no back-end;
 * DELETE: Deleta uma informação no back-end;
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

module.exports = app;