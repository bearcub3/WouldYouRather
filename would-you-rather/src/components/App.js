import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Login from './Login';

function App(props) {
    useEffect(() => {
        props.dispatch(handleInitialData());
    });
    return (
        <div className="App">
            <LoadingBar style={{ backgroundColor: `#0A014F`, height: `3px` }} />
            <Header />
            <div
                style={{
                    height: `65vh`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                }}
            >
                <Route path="/login" component={Login} />
            </div>
        </div>
    );
}

App.propTypes = {
    dispatch: propTypes.func,
};

export default connect()(App);
