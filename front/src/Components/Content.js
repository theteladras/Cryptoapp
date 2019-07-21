import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PanelHeader from './PanelHeader';
import PanelRow from './PanelRow';
import MyChart from './MyChart';
import constants from '../constants';

const Content = props => {
    const renderRows = () => props.records.map((obj, i) => (
		<PanelRow data={obj} key={`${obj}${i}`} handleBtn={props.handleBtn} />
    ));
    if (props.loading) {
        return (
            <div className="spinner_container">
                <img src={constants.SPINNER} alt="loading" className="spinner" />
            </div>
        );
    } 
    else if (!props.main) {
        return (
            <div className="panel">
                <PanelHeader />
                {renderRows()}
            </div>
        );
    }
    return (
        <Fragment>
            <div className="panel">
                <PanelHeader main />
                {renderRows()}
            </div>
            <div className="chart_container">
                <MyChart records={props.records} />
            </div>
        </Fragment>
    );
}

Content.propTypes = {
    main: PropTypes.bool,
    loading: PropTypes.bool,
    records: PropTypes.arrayOf(PropTypes.object),
    handleBtn: PropTypes.func
};

export default Content;
