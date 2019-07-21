import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PanelHeader from './PanelHeader';
import PanelRow from './PanelRow';
import MyChart from './MyChart';
import constants from '../constants';

const Content = props => {
    const [ days, setDays ] = useState(7);
    const renderRows = () => props.records.map((obj, i) => (
        <PanelRow
            data={obj}
            key={`${obj}${i}`}
            handleBtn={props.handleBtn}
        />
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
                <div className="chart_holder">
                    <MyChart
                        records={props.records}
                        days={days}
                    />
                    <div className="chart_btn_container">
                        <button
                            className={`chart_btn ${days === 7 && 'chart_btn_selected'}`}
                            onClick={() => setDays(7)}
                        >
                            7d
                        </button>
                        <button
                            className={`chart_btn ${days === 14 && 'chart_btn_selected'}`}
                            onClick={() => setDays(14)}
                        >
                            14d
                        </button>
                        <button
                            className={`chart_btn ${days === 21 && 'chart_btn_selected'}`}
                            onClick={() => setDays(21)}
                        >
                            21d
                        </button>
                </div>
                </div>
            </div>
        </Fragment>
    );
}

Content.propTypes = {
    main: PropTypes.bool,
    loading: PropTypes.bool,
    records: PropTypes.arrayOf(PropTypes.object),
    handleBtn: PropTypes.func,
};

export default Content;
