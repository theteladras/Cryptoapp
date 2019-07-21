import React, { Component } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Content from './Components/Content';

export default class App extends Component {
	state = {
		selected: '',
		fetched_data: [],
		loading: true,
		current_coin_val: 0,
		current_coin_change: '',
	}

	componentDidMount() {
		this.fetchLatestRecords();
	}

	fetchLatestRecords = async () => {
		try {
			let { data } = await axios.get('/latest');
			this.setState({ fetched_data: data, selected: '', loading: false, });
		}
		catch (e) {
			console.log(e);
		}
	}

	fetchCoinData = async coin => {
		let { data } = await axios.post('/get-coin-data', { coin });
		return data;
	}

	fetchCurrentCoinVal = async coin => {
		let { data } = await axios.post('/current-value', { coin });
		this.setState({ current_coin_val: parseFloat(data.val), current_coin_change: data.change });
	}

	_handleHeaderBtn = index => {
		this.setState({ loading: true }, async () => {
			if (!index) {
				this.fetchLatestRecords();
				return;
			}
			this.fetchCurrentCoinVal(index);
			let data = await this.fetchCoinData(index);
			this.setState({ selected: index, fetched_data: data, loading: false });
		});
	}

	render() {
		return (
			<div className="container">
				<Header
					selected={this.state.selected}
					current_coin_val={this.state.current_coin_val}
					current_coin_change={this.state.current_coin_change}
				/>
				<div className="body">
					<Content
						handleBtn={this._handleHeaderBtn}
						main={this.state.selected.length}
						loading={this.state.loading}
						records={this.state.fetched_data}
					/>
				</div>
			</div>
		);
	}
}
