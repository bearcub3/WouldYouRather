import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TabContext } from '../context/tabs';
import Tabs from './Tabs';
import PollContainer from './PollContainer';

const TabsContent = [
    { label: 'Unanswered Polls', value: 0 },
    { label: 'Answered Polls', value: 1 },
];

function Home(props) {
    const { questions } = props;
    const [activeTab, setTab] = useState(0);

    const handleTab = (data) => {
        setTab(data);
    };

    return (
        <TabContext.Provider value={{ activeTab, controlTabView: handleTab }}>
            <div style={{ width: `90%` }}>
                <Tabs
                    tabs={TabsContent}
                    activeTab={activeTab}
                    handleTab={handleTab}
                />
                {questions.map((id) => (
                    <PollContainer key={id} id={id} />
                ))}
            </div>
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

export default connect(mapStateToProps)(Home);
