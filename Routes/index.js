const {
    fetchLatestRecords,
    fetchCoinPastPrice,
    fetchCoinCurrentPrice,
    fetchCoinWeekOldPrice,
    fetchCurrentSupply,
} = require('../Services/');
const { bodyCoinVerifier } = require('../Middlewares/middleware');

module.exports = app => {
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
}