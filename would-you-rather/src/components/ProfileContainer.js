import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../utils/device-unit';
import Avatar from './Avatar';
import { useAuth } from '../context/auth';
import { Link } from 'react-router-dom';

const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 100px;
    cursor: pointer;
    position: relative;
`;

const User = styled.p`
    font-size: 0.85rem;

    @media ${device.tablet} {
        font-size: 1rem;
    }
`;

const LogoutToolTip = styled.div`
    position: absolute;
    top: 80px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-rows: repeat(2, 1fr);
    width: 120px;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.07);
    cursor: pointer;
`;

const LinkEl = styled(Link)`
    margin: 0.5rem 0;
    font-size: 0.85rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    color: #0a014f;

    &:last-of-type {
        grid-row: 2/3;
    }

    &:hover {
        color: #cd9fcc;
    }
`;

function ProfileContainer(props) {
    const { setAuthTokens } = useAuth();
    const { userAvatar, userName, handleNav } = props;
    const [isClicked, setClicked] = useState(false);
    const [isLoggedOut, setLoggedOut] = useState(false);
    return (
        <AvatarContainer onClick={() => setClicked(!isClicked)}>
            <Avatar img={userAvatar} size={40} />
            <User>{userName}</User>
            {isClicked && (
                <LogoutToolTip>
                    {/* // TODO: fix */}
                    <LinkEl to="/">My Profile</LinkEl>
                    <LinkEl
                        onClick={() => {
                            setAuthTokens('');
                            setLoggedOut(!isLoggedOut);
                            setTimeout(() => {
                                setClicked(!isClicked);
                                handleNav && handleNav(false);
                            }, 300);
                        }}
                        to="/login"
                    >
                        Log Out
                    </LinkEl>
                </LogoutToolTip>
            )}
        </AvatarContainer>
    );
}

ProfileContainer.propTypes = {
    userAvatar: propTypes.string,
    userName: propTypes.string,
};

export default ProfileContainer;
