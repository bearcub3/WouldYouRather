import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import useResizeObserver from 'use-resize-observer';

import { ResizeContext } from '../context/resize';
import {
    handleUsersData,
    handlePollsData,
    handleAuthentication,
} from '../actions/shared';
import { AuthContext } from '../context/auth';
import PrivateRoute from '../PrivateRoute';
import { tokens } from '../utils/helper';

import Header from './Header';
import Login from './Login';
import Home from '../pages/Home';
import CreatePoll from '../pages/CreatePoll';
import Leaderboard from '../pages/Leaderboard';
import PollView from './PollView';
import NotFound from '../pages/404';

function App(props) {
    const { dispatch, questions } = props;

    useEffect(() => {
        dispatch(handleUsersData());
        dispatch(handlePollsData());
    }, [dispatch]);

    // Poll creation
    const [isCompleted, setCompletion] = useState(false);

    const handlePollCreation = (state) => {
        setCompletion(state);
    };

    useEffect(() => {
        if (isCompleted) {
            setCompletion(!isCompleted);
        }
    }, [isCompleted]);

    // Login Dropdown
    const [isOpen, setOpen] = useState(false);

    const handleDropdown = (state) => {
        setOpen(state);
    };

    // Login
    const [authTokens, setAuthTokens] = useState(tokens);

    const setToken = (data) => {
        //document.cookie = `username=${data}`;
        setAuthTokens(data);
    };

    useEffect(() => {
        if (authTokens) {
            dispatch(handleAuthentication(authTokens));
        }
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
        <Router>
            <ResizeContext.Provider value={{ isMobile }}>
                <AuthContext.Provider
                    value={{ authTokens, setAuthTokens: setToken }}
                >
                    <div className="App" ref={ref}>
                        <LoadingBar
                            style={{
                                backgroundColor: `#F6CACA`,
                                height: `3px`,
                            }}
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
                                <Route
                                    path="/login"
                                    render={(props) => (
                                        <Login
                                            {...props}
                                            handleDropdown={handleDropdown}
                                            dropdownState={isOpen}
                                        />
                                    )}
                                />
                                <PrivateRoute
                                    path="/"
                                    exact
                                    render={(props) => (
                                        <Home
                                            {...props}
                                            questions={questions}
                                        />
                                    )}
                                />
                                <PrivateRoute
                                    path="/add"
                                    render={(props) => (
                                        <CreatePoll
                                            {...props}
                                            handlePollCreation={
                                                handlePollCreation
                                            }
                                            pollCreation={isCompleted}
                                        />
                                    )}
                                />
                                <PrivateRoute
                                    path="/leaderboard"
                                    component={Leaderboard}
                                />
                                <PrivateRoute
                                    path="/questions/:id"
                                    render={(props) => <PollView {...props} />}
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
        </Router>
    );
}

function mapStateToProps({ polls }) {
    return {
        questions: Object.keys(polls).sort(
            (a, b) => polls[b].timestamp - polls[a].timestamp
        ),
    };
}

App.propTypes = {
    dispatch: propTypes.func,
    questions: propTypes.array,
};

export default connect(mapStateToProps)(App);
