/* eslint-disable react/prefer-stateless-function */
import './style';
import { Component } from 'preact';
import Chart from 'react-google-charts';
import PanelHeader from './Components/PanelHeader';

export default class App extends Component {
	state = {
		selected: 0,
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

	handleHeaderBtn = index => {
		this.setState({ selected: index });
	}

	render() {
		return (
			<div className="container">
				<div className="header">
					<h1 className="header_logo">BaseCoin</h1>
					<div className="header_menu">
						<h2
							className={this.state.selected === 0 ? 'active_txt' : ''}
							onClick={() => this.handleHeaderBtn(0)}
						>
							All
						</h2>
						<h2
							className={this.state.selected === 1 ? 'active_txt' : ''}
							onClick={() => this.handleHeaderBtn(1)}
						>
							BTC
						</h2>
						<h2
							className={this.state.selected === 2 ? 'active_txt' : ''}
							onClick={() => this.handleHeaderBtn(2)}
						>
							ETH
						</h2>
						<h2
							className={this.state.selected === 3 ? 'active_txt' : ''}
							onClick={() => this.handleHeaderBtn(3)}
						>
							XRP
						</h2>
						<h2
							className={this.state.selected === 4 ? 'active_txt' : ''}
							onClick={() => this.handleHeaderBtn(4)}
						>
							LTE
						</h2>
						<h2
							className={this.state.selected === 5 ? 'active_txt' : ''}
							onClick={() => this.handleHeaderBtn(5)}
						>
							OMG
						</h2>
					</div>
				</div>
				<div className="body">
					<div className="overview_container">
						<PanelHeader main />
						<div className="row">
							<div className="column divider_right">
								<p className="col_text">20 jun 2019</p>
							</div>
							<div className="column divider_right">
								<p className="col_text">BTC</p>
							</div>
							<div className="column divider_right">
								<p className="col_text">2000</p>
							</div>
							<div className="column divider_right">
								<p className="col_text">1900</p>
							</div>
							<div className="column divider_right">
								<p className="col_text">1900</p>
							</div>
						</div>
						<div className="row">
							<div className="column divider_right">
								<p className="col_text">20 jun 2019</p>
							</div>
							<div className="column divider_right">
								<p className="col_text">BTC</p>
							</div>
							<div className="column divider_right">
								<p className="col_text">2000</p>
							</div>
							<div className="column divider_right">
								<p className="col_text">1900</p>
							</div>
							<div className="column divider_right">
								<p className="col_text">1900</p>
							</div>
						</div>
						<div className="row">
							<div className="column divider_right">
								<p className="col_text">20 jun 2019</p>
							</div>
							<div className="column divider_right">
								<p className="col_text">BTC</p>
							</div>
							<div className="column divider_right">
								<p className="col_text">2000</p>
							</div>
							<div className="column divider_right">
								<p className="col_text">1900</p>
							</div>
							<div className="column divider_right">
								<p className="col_text">1900</p>
							</div>
						</div>
					</div>
					<div className="chart_container">
						<Chart
							width={'600px'}
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
