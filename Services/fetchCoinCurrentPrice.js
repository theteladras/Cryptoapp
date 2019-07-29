const axios = require('axios');
const $ = require('cheerio');

// current stat of the coin
const fetchCoinCurrentPrice = async coin => {
    const url = `https://coinmarketcap.com/currencies/${coin}/historical-data/`;
    const webContent = await axios.get(url);
    const coinValue = $('span.details-panel-item--price__value', webContent.data).text();
    const percentage_change = $('span.text-semi-bold > span', webContent.data)[0].attribs['data-format-value'];
    
    return {
        val: coinValue.toString(),
        change: `${percentage_change}%`,
    }
}

module.exports = fetchCoinCurrentPrice;