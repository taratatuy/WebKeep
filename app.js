const express = require('express');
const database = require('./database');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');
const TextModel = require('./models/text');

//database
database()
  .then()
  .catch(() => {
    console.log('Database Promise Error!');
  });

// express
const app = express();

// sets and uses
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// routers
app.get('/myForm', (req, res) => {
  res.sendfile('views/index.html');
});

app.get('/', (req, res) => {
  TextModel.find({}).then(texts => {
    res.render('index.ejs', { texts: texts });
  });
});

app.get('/create', (req, res) => {
  res.render('create.ejs');
});
app.post('/create', (req, res) => {
  console.log(req.body);
  const { createdHead, createdBody } = req.body;
  TextModel.create({
    header: createdHead,
    body: createdBody
  });
  res.redirect('/');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404);
  res.send('This Page Not Found!');
});

app.listen(config.PORT, console.log(`Listening on port ${config.PORT}...`));
