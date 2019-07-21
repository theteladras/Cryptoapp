import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { timeFormer, dateFormer, iconParser } from '../services';

const Header = props => {
	const [ time, setTime ] = useState(timeFormer());
	setInterval(() => setTime(timeFormer()), 30000);
	const renderContentRight = () => {
		if (props.selected) {
			return (
				<Fragment>
					<button
						className="header_btn"
						onClick={() => props.handleBtn()}
					>
						Go Back
					</button>
					<span className="header_coin_info">
						<div className="header_coin_info_holder">
							<h3>Price: </h3>
							<h2 className="header_val">${props.current_coin_val}</h2>
						</div>
						<div className="header_coin_info_holder">
							<h3>Change: </h3>
							<h2
								className={`header_val ${props.current_coin_change[0] === '-' ? 'red-txt' : null}`}
							>
								{props.current_coin_change}
							</h2>
						</div>
					</span>
				</Fragment>
			);
		}
		return  (
			<span className="header_time_container">
				<div className="header_time">
					<h4>{time}</h4>
				</div>
				<div className="header_time">
					<h4>{dateFormer()}</h4>
				</div>
			</span>
		);
	}
	const renderLogo = () => {
		if (props.selected) {
			return <img src={iconParser(props.selected)} className="header_icon" />
		}
	}
	return (
		<div className="header">
			{renderLogo()}
			<h1 className="header_logo">{props.selected ? props.selected : 'BaseCoin'}</h1>
			<div className="header_menu">
				{renderContentRight()}
			</div>
		</div>
	);
};
    
Header.propTypes = {
	selected: PropTypes.string.isRequired,
	current_coin_val: PropTypes.number,
	current_coin_change: PropTypes.string,
	handleBtn: PropTypes.func,
};

export default Header;
