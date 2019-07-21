import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Header = props => {
	const renderContentRight = () => {
		if (props.selected) {
			return (
				<Fragment>
					<button className="header_btn">Go Back</button>
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
		return <div />;
	}
	return (
		<div className="header">
			<h1 className="header_logo">BaseCoin</h1>
			<div className="header_menu">
				{renderContentRight()}
			</div>
		</div>
	);
};
    
Header.propTypes = {
	selected: PropTypes.string.isRequired,
	current_coin_val: PropTypes.number,
	current_coin_change: PropTypes.string
};

export default Header;
