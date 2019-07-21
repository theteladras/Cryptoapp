const $ = require('cheerio');
const axios = require('axios');
const { choosen_coins, choosen_coins_symbol } = require('./coins');

// fetch the latest price of specified coin
const fetchLatestRecords = async () => {
    const url = 'https://coinmarketcap.com/';
    let web_content = await axios.get(url);
    let content = $('tbody > tr', web_content.data);
    let coin_data = [];
    for (let coin in choosen_coins) {
        for (let i = 0; i < content.length; i++) {
            let coin_row = latestPriceQuery(content[i]);
            if (coin_row.name == choosen_coins[coin] || coin_row.name == choosen_coins_symbol[coin]) {
                coin_data.push(coin_row);
                break;
            }
        }
    }
    return coin_data;
}

//fetch current supply of the provided coin
const fetchCurrentSupply = async (coin, symbol) => {
    const url = 'https://coinmarketcap.com/';
    let web_content = await axios.get(url);
    let content = $('tbody > tr', web_content.data);
    let coin_data = [];
    for (let i = 0; i < content.length; i++) {
        let coin_row = latestPriceQuery(content[i]);
        if (coin_row.name.toLowerCase() === coin || coin_row.name.toLowerCase() === symbol) {
            coin_data.push(coin_row);
            break;
        }
    }
    return { coin_supply: coin_data[0].supply, date: new Date() };
}

const latestPriceQuery = obj => ({
    name: obj.children[3].attribs['data-sort'],
    cap: obj.children[5].attribs['data-sort'],
    price: obj.children[7].attribs['data-sort'],
    volume: obj.children[9].attribs['data-sort'],
    supply: obj.children[11].attribs['data-sort'],
});

// current stat of the coin
const fetchCoinCurrentPrice = async coin => {
    const url = `https://coinmarketcap.com/currencies/${coin}/historical-data/`;
    const web_content = await axios.get(url);
    const coin_value = $('span.details-panel-item--price__value', web_content.data).text();
    const percentage_change = $('span.text-semi-bold > span', web_content.data)[0].attribs['data-format-value'];
    
    return {
        val: coin_value.toString(),
        change: `${percentage_change}%`,
    }
}

// fetch all the past records of a coin
const fetchCoinPastPrice = async coin => {
    const url = `https://coinmarketcap.com/currencies/${coin}/historical-data/`;
    const web_content = await axios.get(url);
    const targ_content = $('tbody > tr[class="text-right"]', web_content.data);
    let data = [];
    for (let i = 0; i < targ_content.length; i++) {
        let day_data = PastPriceQuery(targ_content[i]);
        data.push(day_data);
    }
    return data;
};

// fetch all the past records of a coin
const fetchCoinWeekOldPrice = async coin => {
    const url = `https://coinmarketcap.com/currencies/${coin}/historical-data/`;
    const web_content = await axios.get(url);
    const targ_content = $('tbody > tr[class="text-right"]', web_content.data);
    let { date, high, low } = PastPriceQuery(targ_content[6]);
    return { date, high, low };
};


const PastPriceQuery = obj => ({
        date: obj.children[1].children[0].data,
        high: obj.children[5].attribs['data-format-value'],
        low: obj.children[7].attribs['data-format-value'],
        volume: obj.children[11].attribs['data-format-value'],
        cap: obj.children[13].attribs['data-format-value'],
});


module.exports = {
    fetchLatestRecords,
    fetchCoinCurrentPrice,
    fetchCoinPastPrice,
    fetchCoinWeekOldPrice,
    fetchCurrentSupply
}