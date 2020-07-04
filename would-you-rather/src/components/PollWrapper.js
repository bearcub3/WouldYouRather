import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { unansweredPoll } from '../utils/helper';
import Poll from './Poll';

function PollWrapper(props) {
    const { poll } = props;
    return (
        <div>
            <p>Unanswered Questions</p>
            {props.poll.unanswered && (
                <Fragment>
                    <Poll poll={poll} />
                </Fragment>
            )}
            <p>Answered Questions</p>
            {!props.poll.unanswered && (
                <Fragment>
                    <Poll poll={poll} />
                </Fragment>
            )}
        </div>
    );
}

function mapStateToProps({ authedUser, polls, users }, { id }) {
    const poll = polls[id];
    const user = users[authedUser];
    return {
        poll: unansweredPoll(poll, user, users),
    };
}

export default connect(mapStateToProps)(PollWrapper);
