import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { device } from '../utils/device-unit';
import { handleSavePoll } from '../actions/shared';

const Title = styled.h2`
    font-family: 'Galada', cursive;
    color: #f6caca;
    font-size: 1.8rem;
`;

const Input = styled.input`
    width: 95%;
    height: 40px;
    border: 1px solid #e4c2c6;
    border-radius: 7px;
    padding: 5px;
    box-sizing: border-box;
`;

const Li = styled.li`
    margin: 1rem 0;
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    width: 35%;
    background-color: #0a014f;
    color: #fff;
    padding: 0.6rem 0;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    transition: background-color 0.4s ease-in-out;
    text-align: center;

    &:hover {
        background-color: #400abd;
    }

    &:disabled {
        background-color: #c1c1c1;
    }
`;

const FormContainer = styled.div`
    @media ${device.laptopL} {
        width: 50%;
    }

    @media ${device.tablet} {
        width: 80%;
    }
`;

const TextLength = styled.span`
    display: inline-flex;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: ${(props) => (props.length > 65 ? `#FF6F65` : `#e1e1e1`)};
    margin: 0.3rem;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 0.8rem;
    transition: background-color 0.4s ease-out;
`;

function CreatePoll(props) {
    const { dispatch, handlePollCreation, pollCreation } = props;

    const [firstQuestion, setFirstQuestion] = useState('');
    const [secondQuestion, setSecondQuestion] = useState('');
    const [thirdQuestion, setThirdQuestion] = useState('');

    const handlePollQuestion = (e) => {
        e.preventDefault();

        if (
            firstQuestion === secondQuestion ||
            secondQuestion === thirdQuestion ||
            firstQuestion === thirdQuestion
        ) {
            alert('No duplicated questions, please');
            return;
        }

        dispatch(handleSavePoll(firstQuestion, secondQuestion, thirdQuestion));
        setFirstQuestion('');
        setSecondQuestion('');
        setThirdQuestion('');
        handlePollCreation(!pollCreation);
    };

    if (pollCreation) {
        return <Redirect to="/" />;
    }

    return (
        <FormContainer>
            <Title>Create a Would You Rather...?</Title>

            <form onSubmit={handlePollQuestion}>
                <ul style={{ padding: `0` }}>
                    <Li>
                        <Input
                            type="text"
                            value={firstQuestion}
                            onChange={(e) => setFirstQuestion(e.target.value)}
                            placeholder="Q1. Would you rather"
                            maxLength="80"
                        />
                        {firstQuestion.length > 50 ? (
                            <TextLength length={firstQuestion.length}>
                                {80 - firstQuestion.length}
                            </TextLength>
                        ) : null}
                    </Li>
                    <Li>
                        <Input
                            type="text"
                            value={secondQuestion}
                            onChange={(e) => setSecondQuestion(e.target.value)}
                            placeholder="Q2. Would you rather"
                            maxLength="80"
                        />
                        {secondQuestion.length > 50 ? (
                            <TextLength length={secondQuestion.length}>
                                {80 - secondQuestion.length}
                            </TextLength>
                        ) : null}
                    </Li>
                    <Li>
                        <Input
                            type="text"
                            value={thirdQuestion}
                            onChange={(e) => setThirdQuestion(e.target.value)}
                            placeholder="Q3. Would you rather"
                            maxLength="80"
                        />
                        {thirdQuestion.length > 50 ? (
                            <TextLength length={thirdQuestion.length}>
                                {80 - thirdQuestion.length}
                            </TextLength>
                        ) : null}
                    </Li>
                </ul>
                <Button
                    type="submit"
                    disabled={firstQuestion === '' || secondQuestion === ''}
                >
                    Submit
                </Button>
            </form>
        </FormContainer>
    );
}

export default connect()(CreatePoll);
