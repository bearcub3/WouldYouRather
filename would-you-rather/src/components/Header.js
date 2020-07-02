import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Navigation from './Navigation';

const H1 = styled.h1`
    font-size: 1.3rem;
    letter-spacing: -0.03rem;
    color: #0a014f;
`;

function Header() {
    return (
        <header
            style={{
                margin: `1rem 2.5rem`,
                display: `flex`,
                alignItems: `center`,
            }}
        >
            <H1>Would You Rather?</H1>
            <Navigation />
        </header>
    );
}

export default Header;
