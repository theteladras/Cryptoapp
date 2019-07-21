const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const {
    fetchLatestRecords,
    fetchCoinPastPrice,
    fetchCoinCurrentPrice,
    fetchCoinWeekOldPrice,
    fetchCurrentSupply,
} = require('./services');
const { bodyCoinVerifier } = require('./middleware');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// alternative for this routes logic would be to fetch the data from an comercial api

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// fetch all latest coin data
app.get('/latest', async (req, res) => {
    try {
        let data = await fetchLatestRecords();
        res.send(data);
    }
    catch (e) {
        res.status(500).send(e);
    }
});

// fetch the current supply of the coin
app.post('/current-supply', bodyCoinVerifier, async (req, res) => {
    try {
        const coin = req.body.coin;
        const symbol = req.body.symbol;
        let data = await fetchCurrentSupply(coin, symbol);
        res.send(data);
    }
    catch (e) {
        res.status(500).send(e);
    }
});

// fetch the data of the provided coin from the past 30 days
app.post('/get-coin-data', bodyCoinVerifier, async (req, res) => {
    try {
        const coin = req.body.coin;
        let data = await fetchCoinPastPrice(coin);
        res.send(data);
    }
    catch (e) {
        res.status(500).send(e);
    }
});

// fetch the current value and the change for the provided coin
app.post('/current-value', bodyCoinVerifier, async (req, res) => {
    try {
        const coin = req.body.coin;
        let data = await fetchCoinCurrentPrice(coin);
        res.send(data);
    }
    catch (e) {
        res.status(500).send(e);
    }
});

// fetch the week old value and the change for the provided coin
app.post('/current-week-old-value', bodyCoinVerifier, async (req, res) => {
    try {
        const coin = req.body.coin;
        let data = await fetchCoinWeekOldPrice(coin);
        res.send(data);
    }
    catch (e) {
        res.status(500).send(e);
    }
});


app.listen(port, () => console.log(`Server runing on port ${port}.`));
