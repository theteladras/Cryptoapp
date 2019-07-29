const queryLatestPrice = obj => ({
    name: obj.children[3].attribs['data-sort'],
    cap: obj.children[5].attribs['data-sort'],
    price: obj.children[7].attribs['data-sort'],
    volume: obj.children[9].attribs['data-sort'],
    supply: obj.children[11].attribs['data-sort'],
});

module.exports = queryLatestPrice;