import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from './Avatar';

const Container = styled.div`
    border-radius: 10px;
    border: 4px solid #0a014f;
    margin: 2rem auto;
    display: grid;
    grid-template: auto 1fr / 40% 1fr;
`;

const PollCreatorName = styled.div`
    grid-column: 1 / span 2;
    padding: 1.5rem 0;
    margin-left: 1.5rem;
    font-weight: 700;
    font-size: 1.3rem;
`;

function Poll(props) {
    const { avatar, creator } = props.category;
    return (
        <Container>
            <PollCreatorName>
                {creator} <span style={{ fontWeight: `400` }}>asks</span>
            </PollCreatorName>
            <Avatar img={avatar} size={120} />
            <p>{creator}</p>
        </Container>
    );
}

Poll.propTypes = {
    category: propTypes.object,
};

export default Poll;
