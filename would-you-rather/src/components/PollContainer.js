import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useTabs } from '../context/tabs';
import Poll from './Poll';

const TabContainer0 = styled.div`
    display: ${(props) => (props.active === 0 ? `none` : `block`)};
`;

const TabContainer1 = styled.div`
    display: ${(props) => (props.active === 1 ? `none` : `block`)};
`;

function PollContainer(props) {
    const { activeTab } = useTabs();
    const { category } = props;

    console.log(category);

    return (
        <Fragment>
            {category.answered && (
                <TabContainer0 active={activeTab}>
                    <Poll category={category} />
                </TabContainer0>
            )}
            {!category.answered && (
                <TabContainer1 active={activeTab}>
                    <Poll category={category} />
                </TabContainer1>
            )}
        </Fragment>
    );
}

function mapStateToProps({ polls, users, authedUser }, { id }) {
    const poll = polls[id];
    const { creator, timestamp, questions_0, questions_1, questions_2 } = poll;
    return {
        category: {
            id,
            timestamp,
            creator: users[creator].name,
            avatar: users[creator].avatarURL,
            questions_0,
            questions_1,
            questions_2,
            answer: users[authedUser].answered[id],
            answered: !!users[authedUser].answered[id],
        },
    };
}

PollContainer.propTypes = {
    category: propTypes.object,
};

export default connect(mapStateToProps)(PollContainer);
