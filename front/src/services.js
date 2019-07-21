import constants from './constants';

export const constructChartData = (records, days) => {
	let data_arr = Array(days).fill().map(()=>Array(3).fill());
	data_arr[0] = ['x', 'high', 'low'];
	for (let i = days - 1; i > 0; i--) {
		for (let j = 0; j < data_arr[0].length; j++) {
			if (!j) {
				data_arr[i][j] = parseInt(new Date(records[i-1].date).getDate());
				continue;
			}
			data_arr[i][j] = parseFloat(records[i-1][data_arr[0][j]]);
		}
	}
	return data_arr;
}

export const timeFormer = () => {
	let hours = new Date().getHours();
	hours < 10 ? hours = `0${hours}` : hours = hours;
	let minutes = new Date().getMinutes();
	minutes < 10 ? minutes = `0${minutes}` : minutes = minutes;
	return `${hours}:${minutes}`;
}

export const dateFormer = () => {
	let day = new Date().getDate();
	day.length < 10 ? day = `0${day}` : day = day;
	let month = new Date().getMonth();
	month < 10 ? month = `0${month}` : month = month;
	let year = new Date().getFullYear();
	return `${day}/${month}/${year}`;
}

export const iconParser = coin => {
	if (!coin) return;
	switch(coin.toLowerCase()) {
		case 'bitcoin':
			return constants.BTC_ICON;
		case 'ethereum':
			return constants.ETH_ICON;
		case 'ripple':
		case 'xrp':
			return constants.XRP_ICON;
		case 'litecoin':
			return constants.LTE_ICON;
		case 'omisego':
			return constants.OMG_ICON;
		default:
			return;
	}
}

export const roundMyNumber = num => parseInt(parseFloat(num)*100)/100;