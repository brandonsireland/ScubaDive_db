const express = require('express');
const mongoose = require('mongoose');
// const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./routes');

const db = require('./config/db');

// connect to mongoose
mongoose.connect(db.url, {
    useNewUrlParser: true
});

const PORT = 3000;

app.use('/', routes);

app.use(bodyParser.json());
// app.use(helmet());

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});