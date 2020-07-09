import React, { useState } from 'react';
import styled from 'styled-components';

import { useResize } from '../context/resize';
import { HamburgerContext } from '../context/hamburger';
import { device } from '../utils/device-unit';

import Navigation from './Navigation';
import Hamburger from './Hamburger';

const H1 = styled.h1`
    font-family: 'Galada', cursive;
    font-size: 1.4rem;
    color: #0a014f;
    font-weight: 500;
`;

const HeaderWrapper = styled.header`
    @media ${device.laptopL} {
        display: grid;
        grid-template-columns: 25% 20% 55%;
        align-items: center;
        justify-content: center;
        margin: 1rem 2.5rem;
        height: 100px;
    }
    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

function Header() {
    const { isMobile } = useResize();
    const [isActive, setActive] = useState(false);

    const handleHamburger = (param) => {
        setActive(param);
    };

    return (
        <HamburgerContext.Provider
            value={{ isActive, setActive: handleHamburger }}
        >
            <HeaderWrapper>
                <H1>Would You Rather?</H1>
                {isMobile ? <Hamburger /> : <Navigation />}
            </HeaderWrapper>
        </HamburgerContext.Provider>
    );
}

export default Header;
