const bodyCoinVerifier = (req, res, next) => {
    if (!req.body.coin) return res.status(400).send('Error: Coin has to be specified!');
    switch(req.body.coin.toLowerCase()) {
        case 'btc':
        case 'bitcoin':
            req.body.coin = 'bitcoin';
            req.body.symbol = 'btc';
            return next();
        case 'eth':
        case 'ethereum':
            req.body.coin = 'ethereum';
            req.body.symbol = 'eth';
            return next();
        case 'xrp':
        case 'ripple':
            req.body.coin = 'ripple';
            req.body.symbol = 'xrp';
            return next();
        case 'ltc':
        case 'litecoin':
            req.body.coin = 'litecoin';
            req.body.symbol = 'ltc';
            return next();
        case 'omg':
        case 'omisego':
            req.body.coin = 'omisego';
            req.body.symbol = 'omg';
            return next();
        default:
            res.status(400).send("Invalid coin.");
    }
};

module.exports = {
    bodyCoinVerifier,
}