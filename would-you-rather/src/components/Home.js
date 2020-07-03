import React from 'react';
import { connect } from 'react-redux';

function Home(props) {
    return <div>home</div>;
}

function mapStateToProps({ authedUser, dispatch }) {
    return {
        authedUser,
        dispatch,
    };
}

export default connect(mapStateToProps)(Home);
