const PanelHeader = props => {
	if (props.main) {
		return (
			<div className="row main_row">
				<div className="column divider_right_main">
					<p className="col_text_main">Name</p>
				</div>
				<div className="column divider_right_main">
					<p className="col_text_main">Price</p>
				</div>
				<div className="column divider_right_main">
					<p className="col_text_main">Supply</p>
				</div>
				<div className="column divider_right_main">
					<p className="col_text_main">Volume</p>
				</div>
				<div className="column">
					<p className="col_text_main">Market Cap</p>
				</div>
			</div>
		);
	}
	return (
		<div className="row main_row">
			<div className="column divider_right_main">
				<p className="col_text_main">Date</p>
			</div>
			<div className="column divider_right_main">
				<p className="col_text_main">High</p>
			</div>
			<div className="column divider_right_main">
				<p className="col_text_main">Low</p>
			</div>
			<div className="column divider_right_main">
				<p className="col_text_main">Volume</p>
			</div>
			<div className="column">
				<p className="col_text_main">Cap</p>
			</div>
		</div>
	);
};

export default PanelHeader;
