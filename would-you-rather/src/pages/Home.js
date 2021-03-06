import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

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

function Home({ questions }) {
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

Home.propTypes = {
    questions: propTypes.array,
};

export default Home;
