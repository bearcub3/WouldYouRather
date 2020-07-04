import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleInitialData, handleAuthentication } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import PrivateRoute from '../PrivateRoute';

import Header from './Header';
import Home from './Home';
import Poll from './Poll';
import Login from './Login';
import NotFound from '../pages/404';

function App(props) {
    const { dispatch } = props;
    useEffect(() => {
        dispatch(handleInitialData());
    }, []);

    const regex = /[^=]*$/;
    const tokens = document.cookie.match(regex)[0];
    const [authTokens, setAuthTokens] = useState(tokens);

    const setToken = (data) => {
        document.cookie = `username=${data}`;
        setAuthTokens(data);
    };

    useEffect(() => {
        dispatch(handleAuthentication(authTokens));
    }, [dispatch, authTokens]);

    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setToken }}>
            <div className="App">
                <LoadingBar
                    style={{ backgroundColor: `#0A014F`, height: `3px` }}
                />
                <Header />
                <main
                    style={{
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                    }}
                >
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <PrivateRoute path="/questions" />
                        <Route path="/login" component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

App.propTypes = {
    dispatch: propTypes.func,
};

export default connect()(App);
