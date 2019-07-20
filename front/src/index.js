/* eslint-disable react/prefer-stateless-function */
import '../style';
import { Component } from 'preact';
import Chart from 'react-google-charts';
import axios from 'axios';
import PanelHeader from './Components/PanelHeader';
import Header from './Components/Header';
import PanelRow from './Components/PanelRow';

export default class App extends Component {
	state = {
		selected: '',
		latest_data: [],
		data: [
			['x', 'BTC', 'ETH', 'XRP'],
			[0, 0, 2, 4],
			[1, 10, 5, 6],
			[4, 18, 20, 25],
			[9, 40, 0, 40],
			[10, 32, 32, 32],
			[11, 35, 79, 22]
		]
	}

	// eslint-disable-next-line react/sort-comp
	componentDidMount() {
		axios.get('/latest').
			then(res => this.setState({ latest_data: res.data })).
			catch(e => console.log(e));
		axios.post('/get-coin-data', { coin: this.state.selected }).
			then(res => console.log(res.data)).
			catch(e => console.log(e));
	}

	_handleHeaderBtn = index => {
		axios.post('/get-coin-data', { coin: index }).
			then(res => console.log(res.data)).
			catch(e => console.log(e));
		this.setState({ selected: index });
	}

	renderRows = () => this.state.latest_data.map(obj => (
		<PanelRow data={obj} />
	));

	render() {
		return (
			<div className="container">
				<Header selected={this.state.selected} handleBtn={this._handleHeaderBtn} />
				<div className="body">
					<div className="panel">
						<PanelHeader main={!this.state.selected} />
						{this.renderRows()}
					</div>
					<div className="chart_container">
						<Chart
							height={'400px'}
							chartType="LineChart"
							loader={<div>Loading Chart</div>}
							data={this.state.data}
							options={{
								hAxis: {
									title: 'Time'
								},
								vAxis: {
									title: 'Price (USD)'
								}
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}
