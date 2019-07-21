import React, { Component } from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';
import { constructChartData } from '../services';

class MyChart extends Component {
	state = {
		data: [],
	}
	componentDidMount() {
		this.setState({ data: constructChartData(this.props.records, this.props.days) });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.days !== this.props.days) {
			this.setState({ data: constructChartData(this.props.records, nextProps.days) });
		}
	}

	render() {
		return (
			<Chart
				height={'400px'}
				chartType="LineChart"
				data={this.state.data}
				className="my_chart"
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
	}
};

MyChart.propTypes = {
	records: PropTypes.any.isRequired,
	days: PropTypes.number,
};

export default MyChart;
