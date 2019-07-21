/* eslint-disable camelcase */
/* eslint-disable react/prefer-stateless-function */
import '../style';
import { Component } from 'preact';
import axios from 'axios';
import PanelHeader from './Components/PanelHeader';
import Header from './Components/Header';
import PanelRow from './Components/PanelRow';
import coins from './coins';
import MyChart from './Components/MyChart';

export default class App extends Component {
	state = {
		selected: '',
		latest_data: [],
		loading: true,
		records: [
			['x'],[],[],[],[],[],[],[]
		],
		single_record: [
			['x'],[],[],[],[],[],[],[]
		]
	}

	// eslint-disable-next-line react/sort-comp
	componentDidMount() {
		this.initialFetch();
	}

	initialFetch = async () => {
		await this.fetchLatestRecords();
		await this.fetchCoinRecords();
	}

	fetchLatestRecords = async () => {
		try {
			let { data } = await axios.get('/api/latest');
			this.setState({ latest_data: data });
		}
		catch (e) {
			console.log(e);
		}
	}

	fetchCoinRecords = async () => {
		try {
			let all_records = await axios.get('/api/all-history-val');
			let current_records = this.state.records;
			let obj_keys = Object.keys(all_records.data);
			for (let index = 0; index < obj_keys.length; index++) {
				console.log(obj_keys);
				let { data: current_value } = await axios.post('/api/current-value', { coin: obj_keys[index] });
				current_records[0][index+1] = obj_keys[index];
				current_records[1][index+1] = current_value;
				current_records[1][0] = new Date().getDate();
				for (let i = 7; i > 1; i--) {
					current_records[i][0] = new Date(all_records[obj_keys[index]][i-2].date).getDate();
					current_records[i][index+1] = parseInt(all_records[obj_keys[index]][i-2].high);
				}
			}
			this.setState({ records: current_records, loading: false });
		}
		catch (e) {
			console.log(e);
		}
	}

	_handleHeaderBtn = async index => {
		
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
						<MyChart loading={this.state.loading} records={this.state.records} />
					</div>
				</div>
			</div>
		);
	}
}
