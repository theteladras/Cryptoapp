import React from 'react';
import PropTypes from 'prop-types';

const PanelRow = props => (
	<div className="row" onClick={() => props.handleBtn(props.data.name)}>
		<div className="column white">
			<p className="col_text">{props.data.name || props.data.date}</p>
		</div>
		<div className="column white">
			<p className="col_text">{roundNumber(props.data.price || props.data.high)}</p>
		</div>
		<div className="column white">
			<p className="col_text">{parseInt(props.data.supply || props.data.low)}</p>
		</div>
		<div className="column white">
			<p className="col_text">{parseFloat(props.data.volume)}</p>
		</div>
		<div className="column white">
			<p className="col_text">{parseFloat(props.data.cap)}</p>
		</div>
	</div>
);

PanelRow.propTypes = {
	data: PropTypes.arrayOf(PropTypes.string),
	handleBtn: PropTypes.func,
};

const roundNumber = num => parseInt(parseFloat(num)*100)/100;

export default PanelRow;