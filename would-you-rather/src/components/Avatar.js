import React from 'react';
import styled from 'styled-components';

const ProfileAvatar = styled.div`
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center center;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: inline-block;
    border: 3px solid #cd9fcc;
    margin: 0 1rem;
`;

function Avatar(props) {
    return <ProfileAvatar img={props.img} />;
}

export default Avatar;
