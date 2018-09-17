const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// express
const app = express();

// sets and uses
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// routers
app.get('/', (req, res) => {
    res.sendfile('views/index.html');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404);
    res.send("This Page Not Found!");
  });

app.listen(3000, console.log('Listening on port 3000...'));
