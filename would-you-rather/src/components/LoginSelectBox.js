import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { connect } from 'react-redux';
import { useAuth } from '../context/auth';
import { IconContext } from 'react-icons';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import Avatar from './Avatar';

const SelectBox = styled.div`
    display: grid;
    grid-template-columns: auto 35px;
    padding: 1rem 0;
    cursor: pointer;
    align-items: center;
    color: #c1c1c1;
`;

const LoginBTN = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease-out;
    width: 95%;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 0.5rem 0;
    margin: 0.5rem;
    font-size: 1rem;

    &:hover,
    &:focus {
        background-color: rgba(246, 202, 202, 0.5);
    }
`;

function LoginSelectBox({ users, dropDownState, handleDropdown }) {
    const { setAuthTokens } = useAuth();

    const userlist = Object.entries(users).map((user) => user[1]);

    return (
        <div
            style={{
                position: `absolute`,
                padding: `0`,
                width: `100%`,
                border: `1px solid #000`,
                borderRadius: `5px`,
                zIndex: `1`,
                backgroundColor: `#fff`,
            }}
        >
            <IconContext.Provider value={{ color: '#CD9FCC', size: '1.3rem' }}>
                <SelectBox onClick={() => handleDropdown(!dropDownState)}>
                    <span style={{ marginLeft: `1rem` }}>
                        which account is yours?
                    </span>
                    {dropDownState ? <FiChevronUp /> : <FiChevronDown />}
                </SelectBox>
            </IconContext.Provider>
            {userlist.map((user) => (
                <div
                    key={user.id}
                    style={dropDownState ? {} : { display: `none` }}
                >
                    <LoginBTN
                        onClick={() => {
                            setAuthTokens(user.id);
                            handleDropdown(!dropDownState);
                        }}
                    >
                        <Avatar img={user.avatarURL} size={40} />
                        {user.name}
                    </LoginBTN>
                </div>
            ))}
        </div>
    );
}

function mapStateToProps({ users }) {
    return {
        users,
    };
}

LoginSelectBox.propTypes = {
    users: propTypes.object,
    dropDownState: propTypes.bool,
    handleDropdown: propTypes.func,
};

export default connect(mapStateToProps)(LoginSelectBox);
