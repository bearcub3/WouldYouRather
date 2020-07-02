import React, { useState } from 'react';
import styled from 'styled-components';
import { handleLogIn } from '../actions/shared';
import { IconContext } from 'react-icons';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

/* TODO: AUTHED_ID = login id  */

const SelectBox = styled.div`
    display: grid;
    grid-template-columns: auto 35px;
    padding: 1rem 0;
    cursor: pointer;
    margin-left: 1rem;
    align-items: center;
    color: #c4c4c4;
`;

const Avatar = styled.div`
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center center;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: inline-flex;
    border: 3px solid #cd9fcc;
    margin-left: 0.5rem;
`;

const LoginBTN = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

function LoginSelectBox(props) {
    const [isOpen, setOpen] = useState(false);
    const users = [];
    Object.entries(props.userlist).map((user) => users.push(user[1]));
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
                <SelectBox onClick={() => setOpen(!isOpen)}>
                    which account is yours?{' '}
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </SelectBox>
            </IconContext.Provider>
            {users.map((user) => (
                <div
                    key={user.id}
                    style={
                        isOpen
                            ? {
                                  padding: `.5rem`,
                                  display: `grid`,
                                  gridTemplateColumns: `25% 75%`,
                                  cursor: `pointer`,
                              }
                            : { display: `none` }
                    }
                >
                    <Avatar img={user.avatarURL} />
                    <LoginBTN>{user.name}</LoginBTN>
                </div>
            ))}
        </div>
    );
}

export default LoginSelectBox;
