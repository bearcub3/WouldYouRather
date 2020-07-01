import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';

function App(props) {
    useEffect(() => {
        props.dispatch(handleInitialData());
        console.log(props);
    });
    return (
        <div className="App">
            <LoadingBar style={{ backgroundColor: `#0A014F`, height: `3px` }} />
            starting now
        </div>
    );
}

export default connect()(App);
