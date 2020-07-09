import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useResizeObserver from 'use-resize-observer';

import { ResizeContext } from '../context/resize';
import { handleUsersData, handleAuthentication } from '../actions/shared';
import { AuthContext } from '../context/auth';
import PrivateRoute from '../PrivateRoute';

import Header from './Header';
import Home from '../pages/Home';
import CreatePoll from '../pages/CreatePoll';
import Leaderboard from '../pages/Leaderboard';
import Login from './Login';
import PollView from './PollView';
import NotFound from '../pages/404';

function App(props) {
    const { dispatch } = props;

    // Login Dropdown
    const [isOpen, setOpen] = useState(false);

    const handleDropdown = (state) => {
        setOpen(state);
    };

    const regex = /[^=]*$/;
    const tokens = document.cookie.match(regex)[0];
    const [authTokens, setAuthTokens] = useState(tokens);

    const setToken = (data) => {
        document.cookie = `username=${data}`;
        setAuthTokens(data);
    };

    useEffect(() => {
        dispatch(handleUsersData());
    }, [dispatch]);

    useEffect(() => {
        dispatch(handleAuthentication(authTokens));
    }, [dispatch, authTokens]);

    const [isMobile, setDevice] = useState(false);

    // TODO: useResizeObserver doesn't work on safari browser

    const { ref } = useResizeObserver({
        onResize: ({ width }) => {
            // TODO: this is arbitrary number
            width <= 770 ? setDevice(true) : setDevice(false);
        },
    });

    return (
        // TODO: there might be a way to refactor these multiple contexts
        <ResizeContext.Provider value={{ isMobile }}>
            <AuthContext.Provider
                value={{ authTokens, setAuthTokens: setToken }}
            >
                <div className="App" ref={ref}>
                    <LoadingBar
                        style={{ backgroundColor: `#F6CACA`, height: `3px` }}
                    />
                    <Header />
                    <main
                        style={{
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `center`,
                            minHeight: `60vh`,
                            flexDirection: `column`,
                        }}
                    >
                        <Switch>
                            <PrivateRoute path="/" exact component={Home} />
                            <PrivateRoute path="/add" component={CreatePoll} />
                            <Route
                                path="/leaderboard"
                                component={Leaderboard}
                            />
                            <Route
                                path="/login"
                                component={() => (
                                    <Login
                                        handleDropdown={handleDropdown}
                                        dropdownState={isOpen}
                                    />
                                )}
                            />
                            <PrivateRoute
                                path="/questions/:id"
                                component={PollView}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                    <footer
                        style={{
                            width: `100%`,
                            height: `130px`,
                            backgroundColor: `#E4C2C6`,
                            position: `relative`,
                            bottom: `0`,
                            marginTop: `40px`,
                            zIndex: `0`,
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `center`,
                            color: `#fff`,
                            fontSize: `.8rem`,
                            textAlign: `center`,
                        }}
                    >
                        <span role="img" aria-label="emoji">
                            🤟
                        </span>{' '}
                        Would You Rather?
                        <br />
                        designed and built by Go-Un with React and Redux
                    </footer>
                </div>
            </AuthContext.Provider>
        </ResizeContext.Provider>
    );
}

export default connect()(App);
