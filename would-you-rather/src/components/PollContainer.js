import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { categorizePolls } from '../utils/helper';
import Poll from './Poll';
import { useTabs } from '../context/tabs';

const TabContainer0 = styled.div`
    display: ${(props) => (props.active === 0 ? `none` : `grid`)};
`;

const TabContainer1 = styled.div`
    display: ${(props) => (props.active === 1 ? `none` : `grid`)};
`;

function PollContainer(props) {
    const { activeTab } = useTabs();
    const { category } = props;

    console.log(activeTab);
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

function mapStateToProps({ polls, authedUser, users }, { id }) {
    const poll = polls[id];
    return {
        category: categorizePolls(poll, authedUser, users),
    };
}

export default connect(mapStateToProps)(PollContainer);
