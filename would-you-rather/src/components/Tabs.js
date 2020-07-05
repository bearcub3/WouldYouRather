import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { device } from '../utils/device-unit';

const TabContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 3px solid #0a014f;
    border-left: 3px solid #0a014f;
    border-top: 3px solid #0a014f;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    transition: color 0.3s ease-out, background-color 0.2s ease-in-out;

    &:first-of-type::after {
        content: '';
        width: 18px;
        height: 3px;
        position: absolute;
        top: 47px;
        left: 49.2%;
        background-color: #0a014f;
    }

    @media ${device.laptop} {
        &:first-of-type::after {
            left: 48.8%;
        }
    }

    @media ${device.tablet} {
        &:first-of-type::after {
            left: 48.1%;
        }
    }

    @media ${device.mobileS} {
        &:first-of-type::after {
            left: 47.8%;
        }
    }
`;

const TabWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 2rem 2rem 0 2rem;
    grid-gap: 14px;
    width: 80%;
    height: 50px;
    box-sizing: border-box;
`;

function Tabs(props) {
    const { activeTab, handleTab, tabs } = props;
    return (
        <TabWrapper>
            {tabs.map(({ label, value }) => (
                <TabContainer
                    key={label}
                    color={`${value === activeTab ? '#0A014F' : '#fff'}`}
                    bgColor={`${value === activeTab ? '#fff' : '#0A014F'}`}
                    onClick={() => {
                        handleTab(value);
                    }}
                >
                    {label}
                </TabContainer>
            ))}
        </TabWrapper>
    );
}

Tabs.propTypes = {
    activeTab: PropTypes.number.isRequired,
    handleTab: PropTypes.func.isRequired,
    tabs: PropTypes.arrayOf(Object).isRequired,
};

export default Tabs;
