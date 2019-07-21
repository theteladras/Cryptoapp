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
		let { data } = await axios.get('/latest');
		this.setState({ fetched_data: data, selected: '', loading: false, });
	}

	fetchCoinData = async coin => {
		let { data } = await axios.post('/get-coin-data', { coin });
		return data;
	}

	fetchCurrentCoinVal = async coin => {
		let { data } = await axios.post('/current-value', { coin });
		this.setState({ current_coin_val: parseFloat(data.val), current_coin_change: data.change });
	}

	_handleBtn = coin => {
		this.setState({ loading: true }, async () => {
			if (!coin) return this.fetchLatestRecords();
			this.fetchCurrentCoinVal(coin);
			let data = await this.fetchCoinData(coin);
			this.setState({ selected: coin, fetched_data: data, loading: false });
		});
	}

	render() {
		return (
			<div className="container">
				<Header
					selected={this.state.selected}
					current_coin_val={this.state.current_coin_val}
					current_coin_change={this.state.current_coin_change}
					handleBtn={this._handleBtn}
				/>
				<div className="body">
					<Content
						handleBtn={this._handleBtn}
						main={this.state.selected.length}
						loading={this.state.loading}
						records={this.state.fetched_data}
						current_coin_val={this.state.current_coin_val}
					/>
				</div>
			</div>
		);
	}
}
