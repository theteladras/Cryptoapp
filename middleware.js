const bodyCoinVerifier = (req, res, next) => {
    console.log(req.body);
    if (!req.body.coin) return res.status(400).send('Error: Coin has to be specified!');
    switch(req.body.coin.toLowerCase()) {
        case 'btc':
        case 'bitcoin':
            req.body.coin = 'bitcoin';
            return next();
        case 'eth':
        case 'ethereum':
            req.body.coin = 'ethereum';
            return next();
        case 'xrp':
        case 'ripple':
            req.body.coin = 'ripple';
            return next();
        case 'ltc':
        case 'litecoin':
            req.body.coin = 'litecoin';
            return next();
        case 'omg':
        case 'omisego':
            req.body.coin = 'omisego';
            return next();
        default:
            res.status(400).send("Invalid coin.");
    }
};

module.exports = {
    bodyCoinVerifier,
}