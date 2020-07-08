import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { device } from '../utils/device-unit';
import { Link } from 'react-router-dom';

import Avatar from './Avatar';

const Container = styled.div`
    border-radius: 10px;
    margin: 0 auto 2rem auto;
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

const Question = styled.p`
    margin: 0.5rem 1rem;
    font-family: 'Open Sans';
    font-size: clamp(1rem, 2vw, 1.2rem);
    max-height: 100px;
    display: inline-flex;

    @media ${device.mobileS} {
        margin-left: 1rem;
    }
`;

const Button = styled(Link)`
    grid-column: 1 / span 2;
    width: 35%;
    background-color: #0a014f;
    color: #fff;
    padding: 0.6rem 0;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    align-self: start;
    border-radius: 5px;
    transition: background-color 0.4s ease-in-out;
    text-decoration: none;
    text-align: center;

    @media ${device.mobileS} {
        position: relative;
        left: 25px;
    }

    &:hover {
        background-color: #400abd;
    }
`;

const Time = styled.p`
    grid-column: 1 / span 2;
    width: 100%;
    height: 25px;
    font-size: 0.8rem;
    margin: 0 auto;
    line-height: 1.5;
    color: #400abd;
    padding: 0 2.5rem;
    box-sizing: border-box;
`;

function Poll(props) {
    const {
        avatar,
        creator,
        questions_0,
        answered,
        id,
        timestamp,
    } = props.category;
    const { category } = props;

    const mainQuestion = questions_0['question'];

    return (
        <Fragment>
            <Time>{timestamp}</Time>
            <Container>
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
                <Avatar img={avatar} size={65} />
                <Question>{mainQuestion}?</Question>
                <Button
                    to={{
                        pathname: `/questions/${id}`,
                        state: { category },
                    }}
                >
                    {answered ? 'View Result' : 'Join Vote'}
                </Button>
            </Container>
        </Fragment>
    );
}

Poll.propTypes = {
    category: propTypes.object,
};

export default connect()(Poll);
