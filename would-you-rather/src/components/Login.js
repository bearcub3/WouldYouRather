import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import LoginSelectBox from './LoginSelectBox';

function Login(props) {
    return (
        <div
            style={{
                width: `50%`,
                height: `200px`,
                display: `flex`,
                justifyContent: `center`,
                borderRadius: `.8rem`,
                border: `1px solid #000`,
            }}
        >
            <div
                style={{
                    position: `relative`,
                    zIndex: `0`,
                    width: `100%`,
                    margin: `1rem 2rem`,
                }}
            >
                <h3>Log In</h3>
                <p style={{ fontSize: `1rem`, color: `#3d3d3d` }}>
                    Please Log in to continue
                </p>
                <LoginSelectBox userlist={props.users} />
            </div>
        </div>
    );
}

function mapStateToProps({ users }) {
    return {
        users,
    };
}

export default connect(mapStateToProps)(Login);
