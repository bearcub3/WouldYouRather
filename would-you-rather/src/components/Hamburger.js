import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

import { useHamburger } from '../context/hamburger';

const Ham = styled.div`
    position: fixed;
    right: 2rem;
    grid-column: 3/4;
    display: flex;
    width: max-content;
    grid-column: 3/4;
    cursor: pointer;
    z-index: 999999;
    padding: 1rem;

    & > div:last-of-type {
        transition-timing-function: ease-out;
        -moz-transition-duration: 50ms;
    }

    & div::before {
        transition: top 45ms ease 0.12s;
    }

    & div::after {
        transition: bottom 45ms ease 0.12s, transform 45ms ease-out;
    }

    &.isActive {
        background-color: #fae8eb;
        width: max-content;
        height: max-content;
        transition: all 0.4s ease-in-out;
    }

    &.isActive > div:first-of-type {
        transition-delay: 0.12s;
        transition-timing-function: ease-out;
        transform: rotate(45deg);
    }

    &.isActive div::before {
        top: 0;
        transition: top 45ms ease;
    }

    &.isActive div::after {
        bottom: 0;
        transition: bottom 45ms ease, transform 45ms ease-out 0.12s;
        transform: rotate(-90deg);
    }
`;

const Wrapper = styled.div`
    width: 2rem;
    height: 1.5rem;
`;

const Element = styled.div`
    display: block;
    position: absolute;
    width: 2rem;
    height: 3px;
    border-radius: 3px;
    background-color: #0a014f;
    z-index: 99999;
    transition: 0.15s ease transform;
    top: 50%;

    &:before,
    &:after {
        display: block;
        position: absolute;
        width: 2rem;
        height: 3px;
        border-radius: 3px;
        background-color: #0a014f;
        z-index: 99999;
        transition: 0.15s ease transform;
        content: '';
    }

    &:before {
        top: -7px;
    }

    &:after {
        bottom: -7px;
    }
`;

function Hamburger() {
    const { isActive, setActive } = useHamburger();

    return (
        <>
            <Ham
                className={isActive ? 'isActive' : ''}
                onClick={() => setActive(!isActive)}
            >
                <Wrapper>
                    <Element></Element>
                </Wrapper>
            </Ham>
            {isActive ? <Navigation /> : ''}
        </>
    );
}

export default Hamburger;
