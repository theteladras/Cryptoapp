const axios = require('axios');
const $ = require('cheerio');
const queryPastPrice = require('./queryPastPrice');

// fetch all the past records of a coin
const fetchCoinWeekOldPrice = async coin => {
    const url = `https://coinmarketcap.com/currencies/${coin}/historical-data/`;
    const webContent = await axios.get(url);
    const targetContent = $('tbody > tr[class="text-right"]', webContent.data);
    let { date, high, low } = queryPastPrice(targetContent[6]);
    return { date, high, low };
};

module.exports = fetchCoinWeekOldPrice;