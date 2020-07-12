import React, { Fragment, useState } from 'react';
import propTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { useResize } from '../context/resize';

import Avatar from './Avatar';
import FormToVote from './FormToVote';
import PollResult from './PollResult';

const Container = styled.div`
    border-radius: 10px;
    margin: 2rem;
    width: 90%;
    background-color: #fae8eb;
    color: #0a014f;
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: 60px;
    align-items: center;
    grid-auto-flow: row dense;
    padding: 1.5rem;
    box-sizing: border-box;
`;

const PollCreatorName = styled.div`
    grid-column: 1 / span 2;
    padding: 0.5rem 0;
    margin-left: 1.3rem;
    font-weight: 600;
    font-size: clamp(1.3rem, 2vw, 1.8rem);
    letter-spacing: -0.05rem;
`;

function PollView({ match, polls, users, authedUser }) {
    const id = match.params.id;
    const poll = polls[id];

    const { isMobile } = useResize();
    const [toHome, setHome] = useState(false);

    const handleToHome = (param) => {
        setHome(param);
    };

    if (toHome) {
        return <Redirect to="/" />;
    }

    return (
        <Container>
            {poll === undefined ? (
                <Redirect to="/notfound" />
            ) : (
                <Fragment>
                    <PollCreatorName>
                        {users[poll.creator].name}
                        <span
                            style={{
                                fontWeight: `400`,
                                fontSize: `1rem`,
                                fontFamily: `Open Sans`,
                            }}
                        >
                            {' '}
                            asks
                        </span>
                    </PollCreatorName>
                    {isMobile ? null : (
                        <Avatar
                            img={users[poll.creator].avatarURL}
                            size={140}
                        />
                    )}
                    {users[authedUser].answered[id] ? (
                        <PollResult poll={poll} isMobile={isMobile} />
                    ) : (
                        <FormToVote
                            handleToHome={handleToHome}
                            isMobile={isMobile}
                            poll={poll}
                        />
                    )}
                </Fragment>
            )}
        </Container>
    );
}

PollView.propTypes = {
    match: propTypes.object,
    users: propTypes.object,
    polls: propTypes.object,
};

function mapStateToProps({ polls, users, authedUser }) {
    return {
        polls,
        users,
        authedUser,
    };
}

export default withRouter(connect(mapStateToProps)(PollView));
