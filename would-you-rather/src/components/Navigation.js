import React, { Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { device } from '../utils/device-unit';
import { useAuth } from '../context/auth';
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
        font-size: 1.3rem;
        border-radius: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        &:first-of-type {
            margin-top: 45%;
        }

        &:nth-of-type(2) {
            margin-top: 57%;
        }

        &:last-of-type {
            margin-top: ${(props) => `${props.position}%`};
        }
    }
`;

const Nav = styled.nav`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    align-items: center;
    grid-column: 3/4;

    @media ${device.tablet} {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: block;
        margin: 0 auto;
        z-index: 9990;
        background-color: #fff;
        text-align: center;
    }

    & > div:last-child {
        @media ${device.tablet} {
            margin-top: 69%;
            margin-left: -3%;
        }
    }
`;

function Navigation(props) {
    const { authTokens } = useAuth();
    const { users, handleNav } = props;

    return (
        <Nav>
            {handleNav ? (
                <Fragment>
                    <Li
                        to={`/create`}
                        onClick={() => {
                            handleNav(false);
                        }}
                    >
                        New Poll
                    </Li>
                    <Li to="/leaderboard" onClick={() => handleNav(false)}>
                        Leader Board
                    </Li>
                    {users[authTokens] ? (
                        <Fragment>
                            <ProfileContainer
                                userAvatar={users[authTokens].avatarURL}
                                userName={users[authTokens].name}
                                handleNav={handleNav}
                            />
                        </Fragment>
                    ) : (
                        <Li
                            to="/login"
                            onClick={() => handleNav(false)}
                            position={69}
                        >
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
                </Fragment>
            ) : (
                <Fragment>
                    <Li to={`/create`}>New Poll</Li>
                    <Li to={`/leaderboard`}>Leader Board</Li>

                    {users[authTokens] ? (
                        <Fragment>
                            <ProfileContainer
                                userAvatar={users[authTokens].avatarURL}
                                userName={users[authTokens].name}
                            />
                        </Fragment>
                    ) : (
                        <Li to="/login" position={69}>
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
                </Fragment>
            )}
        </Nav>
    );
}

function mapStateToProps({ users, dispatch }) {
    return {
        users,
        dispatch,
    };
}
export default withRouter(connect(mapStateToProps)(Navigation));
