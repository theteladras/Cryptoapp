const fetchLatestRecords = require('./fetchLatestRecords');
const fetchCoinCurrentPrice = require('./fetchCoinCurrentPrice');
const fetchCoinPastPrice = require('./fetchCoinPastPrice');
const fetchCoinWeekOldPrice = require('./fetchCoinWeekOldPrice');
const fetchCurrentSupply = require('./fetchCurrentSupply');

module.exports = {
    fetchLatestRecords,
    fetchCoinCurrentPrice,
    fetchCoinPastPrice,
    fetchCoinWeekOldPrice,
    fetchCurrentSupply
};