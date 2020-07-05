import React, { Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { device } from '../utils/device-unit';
import { useAuth } from '../context/auth';
import ProfileContainer from './ProfileContainer';

const Li = styled(Link)`
    color: #0a014f;
    font-weight: 600;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.8s ease-out;
    padding: 0.5rem;
    border-radius: 1rem;
    height: 15px;

    &:hover {
        background-color: rgba(250, 232, 235, 0.7);
    }
    @media ${device.tablet} {
        margin: 0 auto;
        width: 70%;
        font-size: 1.3rem;
        border-radius: 2rem;
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
        left: 50%;
        margin-top: 35%;
        transform: translateX(-50%);
        width: 100%;
        height: 100vh;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 70px);
        justify-content: center;
        background-color: #fff;
        z-index: 99999;
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
                        to={`/questions`}
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
                        <Li to={`/login`} onClick={() => handleNav(false)}>
                            Log In
                        </Li>
                    )}
                </Fragment>
            ) : (
                <Fragment>
                    <Li to={`/questions`}>New Poll</Li>
                    <Li to={`/leaderboard`}>Leader Board</Li>

                    {users[authTokens] ? (
                        <Fragment>
                            <ProfileContainer
                                userAvatar={users[authTokens].avatarURL}
                                userName={users[authTokens].name}
                            />
                        </Fragment>
                    ) : (
                        <Li to={`/login`}>Log In</Li>
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
