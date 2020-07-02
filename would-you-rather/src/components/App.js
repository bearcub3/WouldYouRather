import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleInitialData, handleLogIn } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import PrivateRoute from '../PrivateRoute';

import Header from './Header';
import Home from './Home';
import Poll from './Poll';
import Login from './Login';

function App(props) {
    useEffect(() => {
        props.dispatch(handleInitialData());
    });

    return (
        <AuthContext.Provider value={false}>
            <div className="App">
                <LoadingBar
                    style={{ backgroundColor: `#0A014F`, height: `3px` }}
                />
                <Header />
                <div
                    style={{
                        height: `65vh`,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                    }}
                >
                    <Route path="/" exact component={Home} />
                    <PrivateRoute path="/questions" component={Poll} />
                    <Route path="/login" component={Login} />
                </div>
            </div>
        </AuthContext.Provider>
    );
}

App.propTypes = {
    dispatch: propTypes.func,
};

export default connect()(App);
