import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import LoginSelectBox from './LoginSelectBox';
import { device } from '../utils/device-unit';

const LoginContainer = styled.div`
    width: 50%;
    height: 200px;
    display: flex;
    justifycontent: center;
    border-radius: 0.8rem;
    border: 4px solid #0a014f;

    @media ${device.tablet} {
        width: 80%;
        margin-top: -50px;
    }
`;

function Login(props) {
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
                <h3 style={{ color: `#0a014f` }}>Log In</h3>
                <p style={{ fontSize: `1rem`, color: `#c1c1c1` }}>
                    Please Log in to continue
                </p>
                <LoginSelectBox
                    userlist={props.users}
                    dispatch={props.dispatch}
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
