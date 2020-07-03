import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import useResizeObserver from 'use-resize-observer';
import Navigation from './Navigation';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';
import { device } from '../utils/device-unit';

const H1 = styled.h1`
    font-size: 1.3rem;
    letter-spacing: -0.03rem;
    color: #0a014f;
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

function Header(props) {
    const [isMobile, setDevice] = useState(false);
    const { ref } = useResizeObserver({
        onResize: ({ width }) => {
            width <= 600 ? setDevice(true) : setDevice(false);
        },
    });
    return (
        <HeaderWrapper ref={ref}>
            <Link to={`/`} style={{ textDecoration: `none` }}>
                <H1>Would You Rather?</H1>
            </Link>
            {isMobile ? <Hamburger /> : <Navigation />}
        </HeaderWrapper>
    );
}

export default Header;
