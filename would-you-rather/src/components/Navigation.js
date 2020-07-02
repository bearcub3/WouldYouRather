import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    color: #000;
    font-size: 1rem;
    display: inline-block;
    margin: 20px;
`;

function Navigation() {
    return (
        <nav>
            <ul>
                <Li>New Poll</Li>
                <Li>Leader Board</Li>
                <Li>Log In</Li>
            </ul>
        </nav>
    );
}

export default Navigation;
