const axios = require('axios');
const $ = require('cheerio');
const { chosenCoin, chosenCoinSymbol } = require('./coins');
const queryLatestPrice = require('./queryLatestPrice');

// fetch the latest price of specified coin
const fetchLatestRecords = async () => {
    const url = 'https://coinmarketcap.com/';
    let webContent = await axios.get(url);
    let content = $('tbody > tr', webContent.data);
    let coinData = [];
    for (let coin in chosenCoin) {
        for (let i = 0; i < content.length; i++) {
            let coinRow = queryLatestPrice(content[i]);
            if (coinRow.name == chosenCoin[coin] || coinRow.name == chosenCoinSymbol[coin]) {
                coinData.push(coinRow);
                break;
            }
        }
    }
    return coinData;
}

module.exports = fetchLatestRecords;