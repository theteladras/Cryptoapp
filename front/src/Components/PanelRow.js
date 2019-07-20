import PropTypes from 'prop-types';

const PanelRow = props => (
	<div className="row">
		<div className="column divider_right white">
			<p className="col_text">{props.data.name}</p>
		</div>
		<div className="column divider_right white">
			<p className="col_text">{roundNumber(props.data.price)}</p>
		</div>
		<div className="column divider_right white">
			<p className="col_text">{parseInt(props.data.supply)}</p>
		</div>
		<div className="column divider_right white">
			<p className="col_text">{parseFloat(props.data.volume)}</p>
		</div>
		<div className="column white">
			<p className="col_text">{parseFloat(props.data.cap)}</p>
		</div>
	</div>
);

PanelRow.propTypes = {
	data: PropTypes.arrayOf(PropTypes.string)
};

const roundNumber = num => parseInt(parseFloat(num)*100)/100;

export default PanelRow;