import Chart from 'react-google-charts';
import PropTypes from 'prop-types';
import constants from '../constants';

const MyChart = props => {
	if (props.loading) {
		return (
			<div className="spinner_container">
				<img src={constants.SPINNER} alt="loading" className="spinner" />
			</div>
		);
	}
	return (
		<Chart
			height={'400px'}
			chartType="LineChart"
			data={props.records}
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
	loading: PropTypes.bool.isRequired,
	records: PropTypes.any.isRequired
};

export default MyChart;