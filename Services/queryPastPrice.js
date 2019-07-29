const queryPastPrice = obj => ({
    date: obj.children[1].children[0].data,
    high: obj.children[5].attribs['data-format-value'],
    low: obj.children[7].attribs['data-format-value'],
    volume: obj.children[11].attribs['data-format-value'],
    cap: obj.children[13].attribs['data-format-value'],
});

module.exports = queryPastPrice;