import React, { useState } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { handleSendPollAnswer } from '../actions/shared';
import { device } from '../utils/device-unit';

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

function FormToVote(props) {
    const { dispatch, handleToHome, isMobile, poll } = props;
    const [userChoice, setChoice] = useState(null);

    const handleSubmitAnswer = (e) => {
        e.preventDefault();
        dispatch(handleSendPollAnswer(poll.id, userChoice));
        handleToHome(true);
    };

    const questionsLength = Object.keys(poll).filter((item) =>
        item.includes('question')
    );

    return (
        <form
            onSubmit={handleSubmitAnswer}
            style={isMobile ? { gridColumn: `1 / span 2` } : {}}
        >
            <ul style={{ padding: `1rem` }}>
                {questionsLength.map((item, idx) => (
                    <Li key={item}>
                        {poll[item] && poll[item].question !== undefined ? (
                            <>
                                <Input
                                    type="radio"
                                    id={item}
                                    name="question"
                                    value={item}
                                    onClick={(e) => setChoice(e.target.value)}
                                />
                                <label
                                    htmlFor={item}
                                    style={{ cursor: `pointer` }}
                                >
                                    {poll[item].question}
                                </label>
                            </>
                        ) : (
                            ''
                        )}
                    </Li>
                ))}
            </ul>
            <Button>Submit</Button>
        </form>
    );
}

FormToVote.propTypes = {
    dispatch: propTypes.func,
    handleToHome: propTypes.func,
    poll: propTypes.object,
    isMobile: propTypes.bool,
};

export default connect()(FormToVote);
