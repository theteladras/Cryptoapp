const axios = require('axios');
const $ = require('cheerio');
const queryLatestPrice = require('./queryLatestPrice');

//fetch current supply of the provided coin
const fetchCurrentSupply = async (coin, symbol) => {
    const url = 'https://coinmarketcap.com/';
    let webContent = await axios.get(url);
    let content = $('tbody > tr', webContent.data);
    let coinData = [];
    for (let i = 0; i < content.length; i++) {
        let coinRow = queryLatestPrice(content[i]);
        if (coinRow.name.toLowerCase() === coin || coinRow.name.toLowerCase() === symbol) {
            coinData.push(coinRow);
            break;
        }
    }
    return { coinSupply: coinData[0].supply, date: new Date() };
}

module.exports = fetchCurrentSupply;