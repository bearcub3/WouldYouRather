import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Avatar from './Avatar';
import { categorizePolls } from '../utils/helper';

const Container = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 10px;
    border: 4px solid #0a014f;
    margin: 2rem auto;
    position: relative;
    top: 530px;
`;

function Poll(props) {
    const { category } = props;
    console.log(category);

    return <div>{category.answer && <Container>{category.id}</Container>}</div>;
}

function mapStateToProps({ polls, authedUser, users }, { id }) {
    const poll = polls[id];
    return {
        category: categorizePolls(poll, authedUser, users),
    };
}

export default connect(mapStateToProps)(Poll);
