import PropTypes from 'prop-types';
import  coins from '../coins';

const Header = props => {
	const renderBtn = () => coins.map(id => (
		<h2
			className={props.selected === id ? 'active_txt' : ''}
			// eslint-disable-next-line react/jsx-no-bind
			onClick={() => props.handleBtn(id)}
		>
			{id || 'All'}
		</h2>
	));

	return (
		<div className="header">
			<h1 className="header_logo">BaseCoin</h1>
			<div className="header_menu">
				{renderBtn()}
			</div>
		</div>
	);
};
    
Header.propTypes = {
	selected: PropTypes.number.isRequired,
	handleBtn: PropTypes.func
};

export default Header;
