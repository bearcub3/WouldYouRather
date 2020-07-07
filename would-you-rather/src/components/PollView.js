import React, { useState } from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import useResizeObserver from 'use-resize-observer';
import { Redirect } from 'react-router-dom';

import Avatar from './Avatar';
import FormToVote from './FormToVote';
import PollResult from './PollResult';

const Container = styled.div`
    border-radius: 10px;
    margin: 2rem;
    width: 90%;
    background-color: #fae8eb;
    color: #0a014f;
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: 60px;
    align-items: center;
    grid-auto-flow: row dense;
    padding: 1.5rem;
    box-sizing: border-box;
`;

const PollCreatorName = styled.div`
    grid-column: 1 / span 2;
    padding: 0.5rem 0;
    margin-left: 1.3rem;
    font-weight: 600;
    font-size: clamp(1.3rem, 2vw, 1.8rem);
    letter-spacing: -0.05rem;
`;

function PollView(props) {
    const { creator, avatar, answered } = props.location.state.category;

    const [toHome, setHome] = useState(false);
    const [isMobile, setDevice] = useState(false);

    const { ref } = useResizeObserver({
        onResize: ({ width }) => {
            width <= 450 ? setDevice(true) : setDevice(false);
        },
    });

    const handleToHome = (param) => {
        setHome(param);
    };

    if (toHome) {
        return <Redirect to="/" />;
    }

    return (
        <Container ref={ref}>
            <PollCreatorName>
                {creator}{' '}
                <span
                    style={{
                        fontWeight: `400`,
                        fontSize: `1rem`,
                        fontFamily: `Open Sans`,
                    }}
                >
                    asks
                </span>
            </PollCreatorName>
            {isMobile ? null : <Avatar img={avatar} size={140} />}
            {answered ? (
                <PollResult
                    poll={props.location.state.category}
                    isMobile={isMobile}
                />
            ) : (
                <FormToVote
                    handleToHome={handleToHome}
                    isMobile={isMobile}
                    poll={props.location.state.category}
                />
            )}
        </Container>
    );
}

PollView.propTypes = {
    dispatch: propTypes.func,
    location: propTypes.object,
};

export default PollView;
