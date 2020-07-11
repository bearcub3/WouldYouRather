import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { device } from '../utils/device-unit';

import { useAuth } from '../context/auth';
import { useHamburger } from '../context/hamburger';
import { FiLogIn } from 'react-icons/fi';

import ProfileContainer from './ProfileContainer';

const Li = styled(Link)`
    color: #0a014f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Galada', cursive;
    text-decoration: none;
    transition: background-color 0.8s ease-out;
    border-radius: 1rem;
    height: 30px;

    &:hover {
        background-color: rgba(250, 232, 235, 0.7);
    }

    & > svg {
        align-items: center;
    }

    @media ${device.tablet} {
        width: 50%;
        padding: 0.5rem;
        font-size: 1.5rem;
        border-radius: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);

        &:nth-of-type(2) {
            margin-top: 15%;
        }

        &:nth-of-type(3) {
            margin-top: 30%;
        }

        &:nth-of-type(4) {
            margin-top: 45%;
        }

        &:last-of-type {
            margin-top: ${(props) => `${props.position}%`};
        }
    }
`;

const Nav = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    align-items: center;
    grid-column: 3/4;

    @media ${device.tablet} {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        margin: 0 auto;
        z-index: 9990;
        background-color: #fff;
        text-align: center;
    }

    & > div:last-child {
        @media ${device.tablet} {
            margin-top: 40%;
        }
    }
`;

function Navigation({ users }) {
    const { authTokens } = useAuth();
    const { setActive } = useHamburger();

    // logout dropdown
    const [isClicked, setClicked] = useState(false);

    const handleDropdown = (state) => {
        setClicked(state);
    };

    return (
        <Nav>
            <Li
                to={`/`}
                onClick={() => {
                    setActive(false);
                }}
            >
                Home
            </Li>
            <Li
                to={`/add`}
                onClick={() => {
                    setActive(false);
                }}
            >
                New Poll
            </Li>
            <Li to="/leaderboard" onClick={() => setActive(false)}>
                Leader Board
            </Li>
            {users[authTokens] ? (
                <Fragment>
                    <ProfileContainer
                        handleDropdown={handleDropdown}
                        dropdownState={isClicked}
                        userAvatar={users[authTokens].avatarURL}
                        userName={users[authTokens].name}
                    />
                </Fragment>
            ) : (
                <Li to="/login" onClick={() => setActive(false)} position={45}>
                    <FiLogIn />
                    <span
                        style={{
                            display: `inline-block`,
                            paddingLeft: `10px`,
                        }}
                    >
                        Log In
                    </span>
                </Li>
            )}
        </Nav>
    );
}

function mapStateToProps({ users }) {
    return {
        users,
    };
}

Navigation.propTypes = {
    users: propTypes.object,
};

export default withRouter(connect(mapStateToProps)(Navigation));
