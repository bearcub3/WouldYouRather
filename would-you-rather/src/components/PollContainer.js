import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useTabs } from '../context/tabs';
import Poll from './Poll';

const TabContainer0 = styled.div`
    display: ${(props) => (props.active === 0 ? `none` : `grid`)};
`;

const TabContainer1 = styled.div`
    display: ${(props) => (props.active === 1 ? `none` : `grid`)};
`;

function PollContainer(props) {
    const { activeTab } = useTabs();
    const { category } = props;

    console.log(category);

    return (
        <div>
            <TabContainer0 active={activeTab}>
                {category.answered && (
                    <div>
                        <span>Answered</span>
                        <Poll category={category} />
                    </div>
                )}
            </TabContainer0>
            <TabContainer1 active={activeTab}>
                {!category.answered && (
                    <div>
                        <span>Unanswered</span>
                        <Poll category={category} />
                    </div>
                )}
            </TabContainer1>
        </div>
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
