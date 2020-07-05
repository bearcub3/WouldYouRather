import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from './Avatar';

const Container = styled.div`
    width: 80%;
    height: 250px;
    border-radius: 10px;
    border: 4px solid #0a014f;
    margin: 2rem auto;
`;

function Poll(props) {
    const { avatar, creator } = props.category;
    return (
        <Container>
            <Avatar img={avatar} size={120} />
            <p>{creator}</p>
        </Container>
    );
}

Poll.propTypes = {
    category: propTypes.object,
};

export default Poll;
