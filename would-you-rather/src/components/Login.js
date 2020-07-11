import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../context/auth';
import { device } from '../utils/device-unit';
import LoginSelectBox from './LoginSelectBox';

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

function Login({ location, handleDropdown, dropdownState }) {
    const { authTokens } = useAuth();

    const { from } = location.state || { from: { pathname: '/' } };

    if (authTokens) {
        return <Redirect to={from} />;
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
                    handleDropdown={handleDropdown}
                    dropDownState={dropdownState}
                />
            </div>
        </LoginContainer>
    );
}

export default Login;
