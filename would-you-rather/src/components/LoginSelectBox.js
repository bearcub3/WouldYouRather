import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { handleLogIn } from '../actions/shared';
import { IconContext } from 'react-icons';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Avatar from './Avatar';
import { Link, withRouter } from 'react-router-dom';
import { device } from '../utils/device-unit';

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

/* TODO: it may be more user friendly to save user id to cookie  */

function LoginSelectBox(props) {
    /*  memory leak risk : https://reactjs.org/docs/hooks-effect.html */
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
                    <span style={{ marginLeft: `1rem` }}>
                        which account is yours?
                    </span>
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </SelectBox>
            </IconContext.Provider>
            {users.map((user) => (
                <div key={user.id} style={isOpen ? {} : { display: `none` }}>
                    <Link to={`/`} style={{ textDecoration: `none` }}>
                        <LoginBTN
                            onClick={() => {
                                props.dispatch(handleLogIn(user.id));
                                setTimeout(() => setOpen(!isOpen), 300);
                            }}
                        >
                            <Avatar img={user.avatarURL} />
                            {user.name}
                        </LoginBTN>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default withRouter(LoginSelectBox);
