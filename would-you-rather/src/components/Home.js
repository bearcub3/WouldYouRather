import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { TabContext } from '../context/tabs';
import Tabs from './Tabs';
import PollContainer from './PollContainer';

const TabsContent = [
    { label: 'Unanswered Polls', value: 0 },
    { label: 'Answered Polls', value: 1 },
];

const Container = styled.div`
    box-sizing: border-box;
    width: 80%;
    border: 3px solid #0a014f;
    border-top: none;
`;

function Home(props) {
    const { questions } = props;
    const [activeTab, setTab] = useState(0);

    const handleTab = (data) => {
        setTab(data);
    };

    return (
        <TabContext.Provider value={{ activeTab, controlTabView: handleTab }}>
            <Tabs
                tabs={TabsContent}
                activeTab={activeTab}
                handleTab={handleTab}
            />
            <Container>
                {questions.map((id) => (
                    <PollContainer key={id} id={id} />
                ))}
            </Container>
        </TabContext.Provider>
    );
}

function mapStateToProps({ polls }) {
    return {
        questions: Object.keys(polls).sort(
            (a, b) => polls[b].timestamp - polls[a].timestamp
        ),
    };
}

Home.propTypes = {
    questions: propTypes.array.isRequired,
};

export default connect(mapStateToProps)(Home);
