import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const ProfileAvatar = styled.div`
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center center;
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    border-radius: ${(props) => `${props.size}px`};
    display: inline-block;
    border: 3px solid #cd9fcc;
    margin: 0 1rem;
    cursor: pointer;
`;

function Avatar(props) {
    return <ProfileAvatar img={props.img} size={props.size} />;
}

Avatar.propTypes = {
    img: propTypes.string.isRequired,
    size: propTypes.number,
};

export default Avatar;
