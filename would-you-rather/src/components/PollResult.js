import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

import { TiThumbsUp } from 'react-icons/ti';
import { useAuth } from '../context/auth';

const stretch = keyframes`
    from {
        width: 0;
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Question = styled.div`
    border: 2px solid #0a014f;
    border-radius: 7px;
    margin-bottom: 1rem;
    padding: 1rem;
    position: relative;
`;

const Bar = styled.div`
    position: relative;
    width: 100%;
    height: 20px;
    border-radius: 5px;
    background-color: #fff;
    margin-top: 20px;

    &::after {
        content: '';
        position: absolute;
        width: ${(props) => `${props.percentage}%`};
        height: 20px;
        border-radius: 5px;
        background-color: #400abd;
        animation: ${stretch} 1.2s linear;
    }
`;

const Result = styled.p`
    color: ${(props) => (props.percentage > 50 ? '#F6CACA' : '#0a014f')};
    font-size: 0.8rem;
    position: absolute;
    left: 50%;
    bottom: 7px;
    transform: translateX(-50%);
`;

const Badge = styled.span`
    position: relative;
    right: calc(-98% + 30px);
    top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    color: #fff;
    background-color: #ff6f65;
    z-index: 10;
    margin-top: -60px;
`;

function PollResult(props) {
    const { authTokens } = useAuth();
    const { isMobile, poll } = props;

    const filterQuestions = Object.entries(poll)
        .filter(([key, value]) => [key, value])
        .filter((item) => item[0].includes('question'));

    const questions = filterQuestions.filter((item) => item[1] !== undefined);

    const eachParticipant = filterQuestions
        .filter((item) => item[1])
        .map((item) => item[1].votes.length);

    const totalParticipants = eachParticipant.reduce((a, b) => a + b);

    const userVote = filterQuestions
        .filter((item, idx) => item[1])
        .map((item) => item[1].votes.includes(authTokens));

    return (
        <div style={isMobile ? { gridColumn: `1 / span 2` } : {}}>
            <h3>Result : </h3>
            {questions.map((question, idx) =>
                question[1].question !== undefined ? (
                    <Fragment key={question[0]}>
                        {userVote[idx] ? (
                            <Badge>
                                <TiThumbsUp size="2rem" />
                            </Badge>
                        ) : null}
                        <Question>
                            {question[1].question}?
                            <Bar
                                percentage={
                                    (eachParticipant[idx] / totalParticipants) *
                                    100
                                }
                            />
                            <Result
                                percentage={
                                    (eachParticipant[idx] / totalParticipants) *
                                    100
                                }
                            >
                                Total {eachParticipant[idx]} of{' '}
                                {totalParticipants} votes
                            </Result>
                        </Question>
                    </Fragment>
                ) : null
            )}
        </div>
    );
}

export default PollResult;
