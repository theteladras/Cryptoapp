const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('I know its wrong so what should i do1.');
  });

// alternative for this routes logic would be to fetch the data from an comercial api

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

require('./Routes/')(app);



app.listen(port, () => console.log(`Server runing on port ${port}.`));
