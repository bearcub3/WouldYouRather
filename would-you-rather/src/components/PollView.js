import React, { useState } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import useResizeObserver from 'use-resize-observer';

import { handleSendPollAnswer } from '../actions/shared';
import { device } from '../utils/device-unit';

import Avatar from './Avatar';

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

const Button = styled.button`
    grid-column: 1 / span 2;
    width: 200px;
    background-color: #0a014f;
    color: #fff;
    padding: 0.6rem 0;
    border: none;
    cursor: pointer;
    align-self: start;
    border-radius: 5px;
    transition: background-color 0.4s ease-in-out;
    text-decoration: none;
    text-align: center;
    margin-left: 20px;

    @media ${device.tablet} {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    &:hover {
        background-color: #400abd;
    }
`;

const Li = styled.li`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
`;

const Input = styled.input`
    width: 23px;
    height: 23px;
    border-color: pink;
    margin-right: 10px;
`;

function PollView(props) {
    // console.log('PollView', props.location.state.category);

    const {
        id,
        creator,
        avatar,
        questions_0,
        questions_1,
        questions_2,
    } = props.location.state.category;

    const { dispatch } = props;

    const [userChoice, setChoice] = useState(null);
    const [isMobile, setDevice] = useState(false);

    const handleSubmitAnswer = (e) => {
        e.preventDefault();
        dispatch(handleSendPollAnswer(id, userChoice));
        setChoice(null);
    };

    const { ref } = useResizeObserver({
        onResize: ({ width }) => {
            width <= 450 ? setDevice(true) : setDevice(false);
        },
    });

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
            <form
                onSubmit={handleSubmitAnswer}
                style={isMobile ? { gridColumn: `1 / span 2` } : {}}
            >
                <ul style={{ padding: `1rem` }}>
                    <Li>
                        <Input
                            type="radio"
                            id="question0"
                            name="question"
                            value="questions_0"
                            onClick={(e) => setChoice(e.target.value)}
                        />
                        <label
                            htmlFor="question0"
                            style={{ cursor: `pointer` }}
                        >
                            {questions_0.question}?
                        </label>
                    </Li>
                    <Li>
                        <Input
                            type="radio"
                            id="question1"
                            name="question"
                            value="questions_1"
                            onClick={(e) => setChoice(e.target.value)}
                        />
                        <label
                            htmlFor="question1"
                            style={{ cursor: `pointer` }}
                        >
                            {questions_1.question}?
                        </label>
                    </Li>
                    {questions_2 && (
                        <Li>
                            <Input
                                type="radio"
                                id="question2"
                                name="question"
                                value="questions_2"
                                onClick={(e) => setChoice(e.target.value)}
                            />
                            <label
                                htmlFor="question2"
                                style={{ cursor: `pointer` }}
                            >
                                {questions_2.question}?
                            </label>
                        </Li>
                    )}
                </ul>
                <Button>Submit</Button>
            </form>
        </Container>
    );
}

PollView.propTypes = {
    dispatch: propTypes.func,
};

export default connect()(PollView);
