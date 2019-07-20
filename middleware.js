const bodyCoinVerifier = (req, res, next) => {
    switch(req.body.coin.toLowerCase()) {
        case 'btc':
            req.body.coin = 'bitcoin';
            return next();
        case 'eth':
            req.body.coin = 'ethereum';
            return next();
        case 'xrp':
            req.body.coin = 'ripple';
            return next();
        case 'ltc':
            req.body.coin = 'litecoin';
            return next();
        case 'omg':
            req.body.coin = 'omisego';
            return next();
        default:
            res.status(400).send("Invalid coin.");
    }
};

module.exports = {
    bodyCoinVerifier,
}