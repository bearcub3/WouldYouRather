import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { handlePollsData } from '../actions/shared';
import { TabContext } from '../context/tabs';
import { device } from '../utils/device-unit';

import Tabs from '../components/Tabs';
import PollContainer from '../components/PollContainer';

const TabsContent = [
    { label: 'Unanswered Polls', value: 0 },
    { label: 'Answered Polls', value: 1 },
];

const Container = styled.div`
    box-sizing: border-box;
    width: 80%;
    border: 3px solid #0a014f;
    border-top: none;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media ${device.laptop} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.tablet} {
        grid-template-columns: 100%;
    }
`;

function Home(props) {
    const { questions, dispatch } = props;
    const [activeTab, setTab] = useState(0);

    const handleTab = (data) => {
        setTab(data);
    };

    useEffect(() => {
        dispatch(handlePollsData());
    }, [dispatch]);

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
