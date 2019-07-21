const express = require('express');
const $ = require('cheerio');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const _ = require('lodash');

const { fetchLatestRecords, fetchAllWeekPrice, fetchCoinPastPrice, fetchCoinCurrentPrice } = require('./services');
const { bodyCoinVerifier } = require('./middleware');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// alternative for this routes logic would be to fetch the data from an comercial api

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'front', 'build', 'index.html'));
// });

// fetch all (selected) latest coin data
app.get('/latest', async (req, res) => {
    try {
        let data = await fetchLatestRecords();
        res.send(data);
    }
    catch (e) {
        res.status(500).send(e);
    }
});

app.get('/all-history-val', async (req, res) => {
    try {
        let all_data = await fetchAllWeekPrice();
        res.send(all_data);
    }
    catch (e) {
        res.status(500).send(e);
    }
});

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


app.listen(port, () => console.log(`Server runing on port ${port}.`));
