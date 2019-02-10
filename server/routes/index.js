const express = require('express');
const routes = express.Router();

routes.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;