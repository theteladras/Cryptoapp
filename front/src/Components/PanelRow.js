import React from 'react';
import PropTypes from 'prop-types';
import { roundMyNumber, iconParser } from '../services';

const PanelRow = props => (
	<div className="row" onClick={() => props.data.name ? props.handleBtn(props.data.name) : null}>
		<div className="column white">
			{renderLogo(props.data.name)}
			<p className={`col_text ${props.data.name && 'row_coin_name'}`}>
				{props.data.name || props.data.date}
			</p>
		</div>
		<div className="column white">
			<p className="col_text">${roundMyNumber(props.data.price || props.data.high)}</p>
		</div>
		<div className="column white">
			<p className="col_text">{props.data.low && '$'}{roundMyNumber(props.data.supply || props.data.low)}</p>
		</div>
		<div className="column white">
			<p className="col_text">{parseFloat(props.data.volume)}</p>
		</div>
		<div className="column white">
			<p className="col_text">{parseFloat(props.data.cap)}</p>
		</div>
	</div>
);

const renderLogo = name => {
	if (name) {
		return <img src={iconParser(name)} className="row_icon" />
	}
}

PanelRow.propTypes = {
	data: PropTypes.arrayOf(PropTypes.string),
	handleBtn: PropTypes.func,
};

export default PanelRow;