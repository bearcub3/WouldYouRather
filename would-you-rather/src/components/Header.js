import React, { useState } from 'react';
import styled from 'styled-components';
import useResizeObserver from 'use-resize-observer';

import { ResizeContext } from '../context/resize';
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
    const [isMobile, setDevice] = useState(false);
    const [isActive, setActive] = useState(false);

    const handleHamburger = (param) => {
        setActive(param);
    };
    // TODO: useResizeObserver doesn't work on safari browser

    const { ref } = useResizeObserver({
        onResize: ({ width }) => {
            // TODO: this is arbitrary number
            width <= 700 ? setDevice(true) : setDevice(false);
        },
    });

    return (
        // TODO: there might be a way to refactor these multiple contexts
        <ResizeContext.Provider value={{ isMobile }}>
            <HamburgerContext.Provider
                value={{ isActive, setActive: handleHamburger }}
            >
                <HeaderWrapper ref={ref}>
                    <H1>Would You Rather?</H1>
                    {isMobile ? <Hamburger /> : <Navigation />}
                </HeaderWrapper>
            </HamburgerContext.Provider>
        </ResizeContext.Provider>
    );
}

export default Header;
