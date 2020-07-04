import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-right: 3px solid #0a014f;
    border-left: 3px solid #0a014f;
    border-top: 3px solid #0a014f;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    transition: color 0.3s ease-out, background-color 0.2s ease-in-out;
`;

const TabWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 2rem;
    grid-gap: 14px;
`;

function TabManager(props) {
    const { activeTab, handleTab, tabs } = props;
    return (
        <TabWrapper>
            {tabs.map(({ label, value }) => (
                <TabContainer
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

TabManager.propTypes = {
    activeTab: PropTypes.number.isRequired,
    handleTab: PropTypes.func.isRequired,
    tabs: PropTypes.arrayOf(Object).isRequired,
};

export default TabManager;
