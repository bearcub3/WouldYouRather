import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../context/auth';
import { useHamburger } from '../context/hamburger';
import { useResize } from '../context/resize';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { device } from '../utils/device-unit';

import Avatar from './Avatar';

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
    width: 150px;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.07);
    cursor: pointer;
    z-index: 99990;
    left: 5px;

    @media ${device.tablet} {
        left: 10px;
    }
`;

const LinkEl = styled(Link)`
    margin: 0.5rem 0 0 1.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    color: #0a014f;
    display: flex;
    align-items: center;

    &:last-of-type {
        grid-row: 2/3;
        margin-bottom: 0.8rem;
    }

    &:hover {
        color: #cd9fcc;
    }
`;

function ProfileContainer(props) {
    const { setAuthTokens } = useAuth();
    const { setActive } = useHamburger();
    const { isMobile } = useResize();

    const { userAvatar, userName, handleDropdown, dropdownState } = props;

    return (
        <AvatarContainer onClick={() => handleDropdown(!dropdownState)}>
            <Avatar img={userAvatar} size={40} />
            <User>{userName}</User>
            {dropdownState && (
                <LogoutToolTip>
                    <LinkEl
                        to="/"
                        onClick={() => {
                            handleDropdown(!dropdownState);
                            isMobile && setActive(false);
                        }}
                    >
                        <FiUser />
                        <span
                            style={{
                                display: `inline-block`,
                                paddingLeft: `10px`,
                            }}
                        >
                            My Profile
                        </span>
                    </LinkEl>
                    <LinkEl
                        onClick={() => {
                            setAuthTokens('');
                            setTimeout(() => {
                                handleDropdown(!dropdownState);
                                isMobile && setActive(false);
                            }, 300);
                        }}
                        to="/login"
                    >
                        <FiLogOut />
                        <span
                            style={{
                                display: `inline-block`,
                                paddingLeft: `10px`,
                            }}
                        >
                            Log Out
                        </span>
                    </LinkEl>
                </LogoutToolTip>
            )}
        </AvatarContainer>
    );
}

// ProfileContainer.propTypes = {
//     userAvatar: propTypes.string,
//     userName: propTypes.string,
// };

export default ProfileContainer;
