import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Tabs from './Tabs';
import Poll from './Poll';

const TabsContent = [
    { label: 'Unanswered Polls', value: 0 },
    { label: 'Answered Polls', value: 1 },
];

function Home(props) {
    const { questions } = props;
    const [activeTab, handleTab] = useState(0);

    return (
        <div style={{ width: `90%` }}>
            <Tabs
                tabs={TabsContent}
                activeTab={activeTab}
                handleTab={handleTab}
            />

            {questions.map((id) => (
                <Poll key={id} id={id} />
            ))}
        </div>
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
