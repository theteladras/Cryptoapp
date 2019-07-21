const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        proxy('/latest', 
            {
                target: 'http://127.0.0.1:5000/',
                headers: {
                    "Connection": "keep-alive"
                },
            }
        ),
        proxy('/get-coin-data', 
            { 
                target: 'http://127.0.0.1:5000/',
                headers: {
                    "Connection": "keep-alive"
                },
            }
        ),
        proxy('/current-value', 
            {
                target: 'http://127.0.0.1:5000/',
                headers: {
                    "Connection": "keep-alive"
                },
            }
        ),
    );
}