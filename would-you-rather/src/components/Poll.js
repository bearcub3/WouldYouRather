import React, { useState } from 'react';
import { connect } from 'react-redux';
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
    console.log(props.category);
    const { avatar } = props.category;
    return (
        <Container>
            <Avatar img={avatar} size={120} />
        </Container>
    );
}

export default connect()(Poll);
