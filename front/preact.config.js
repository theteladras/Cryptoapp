module.exports = function (config) {
	config.devServer.proxy = [
		{
			path: '/latest',
			target: 'http://localhost:5000'
		},
		{
			path: '/get-coin-val',
			target: 'http://localhost:5000'
		},
		{
			path: '/get-coin-data',
			target: 'http://localhost:5000'
		}
	];
};