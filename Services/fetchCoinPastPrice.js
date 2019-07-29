const axios = require('axios');
const $ = require('cheerio');
const queryPastPrice = require('./queryPastPrice');

// fetch all the past records of a coin
const fetchCoinPastPrice = async coin => {
    const url = `https://coinmarketcap.com/currencies/${coin}/historical-data/`;
    const webContent = await axios.get(url);
    const targetContent = $('tbody > tr[class="text-right"]', webContent.data);
    let data = [];
    for (let i = 0; i < targetContent.length; i++) {
        let day_data = queryPastPrice(targetContent[i]);
        data.push(day_data);
    }
    return data;
};

module.exports = fetchCoinPastPrice;