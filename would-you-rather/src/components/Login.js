import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import LoginSelectBox from './LoginSelectBox';
import { Redirect } from 'react-router-dom';
import { device } from '../utils/device-unit';
import { useAuth } from '../context/auth';

const LoginContainer = styled.div`
    width: 50%;
    height: 200px;
    display: flex;
    justify-content: center;
    border-radius: 0.8rem;
    border: 4px solid #0a014f;
    z-index: 10;

    @media ${device.tablet} {
        width: 80%;
        margin-top: -50px;
    }
`;

function Login(props) {
    const { authTokens } = useAuth();
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLoginState = (state) => {
        setLoggedIn(state);
    };

    if (authTokens && isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <LoginContainer>
            <div
                style={{
                    position: `relative`,
                    zIndex: `0`,
                    width: `100%`,
                    margin: `1rem 2rem`,
                }}
            >
                <h3
                    style={{
                        color: `#0a014f`,
                        fontFamily: `Galada, cursive`,
                        fontWeight: `normal`,
                        fontSize: `1.2rem`,
                    }}
                >
                    Log In
                </h3>
                <p style={{ fontSize: `1rem`, color: `#c1c1c1` }}>
                    Please Log in to continue
                </p>
                <LoginSelectBox
                    userlist={props.users}
                    dispatch={props.dispatch}
                    handleLoginState={handleLoginState}
                />
            </div>
        </LoginContainer>
    );
}

function mapStateToProps({ users, dispatch }) {
    return {
        users,
        dispatch,
    };
}

export default connect(mapStateToProps)(Login);
