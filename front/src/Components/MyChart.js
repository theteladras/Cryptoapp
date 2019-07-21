import React, { useState } from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';

const MyChart = ({ loading, records }) => {
	const [ data ] = useState(constructChartData(records, 7));
	return (
		<Chart
			height={'400px'}
			chartType="LineChart"
			data={data}
			options={{
				hAxis: {
					title: 'Time'
				},
				vAxis: {
					title: 'Price (USD)'
				}
			}}
		/>
	);
};

MyChart.propTypes = {
	records: PropTypes.any.isRequired
};

export default MyChart;

const constructChartData = (records, days) => {
	let data_arr = Array(days).fill().map(()=>Array(3).fill());
	data_arr[0] = ['x', 'high', 'low'];
	data_arr[1] = [new Date().getDate(), 1, 1];
	for (let i = 6; i > 1; i--) {
		for (let j = 0; j < data_arr[0].length; j++) {
			if (!j) {
				data_arr[i][j] = parseInt(new Date(records[i-2].date).getDate());
				continue;
			}
			data_arr[i][j] = parseFloat(records[i-2][data_arr[0][j]]);
		} 
	}
	return data_arr;
}