import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { device } from '../utils/device-unit';

const Container = styled.div`
    border-radius: 10px;
    margin: 2rem auto 0;
    width: 90%;
    background-color: #fae8eb;
    color: #0a014f;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 60px;
    align-items: center;
    grid-auto-flow: row dense;
    padding-bottom: 1.5rem;
`;

const PollCreatorName = styled.div`
    grid-column: 1 / span 2;
    padding: 0.5rem 0;
    margin-left: 1.3rem;
    font-weight: 600;
    font-size: 1.3rem;
    letter-spacing: -0.05rem;
`;

function PollView(props) {
    console.log('Poll View', props);
    return <Container>{props.creator}</Container>;
}

export default connect()(PollView);
