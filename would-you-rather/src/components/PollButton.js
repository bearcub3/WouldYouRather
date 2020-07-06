import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link, Route, withRouter } from 'react-router-dom';

import { device } from '../utils/device-unit';
import PollView from './PollView';

const Button = styled(Link)`
    grid-column: 1 / span 2;
    width: 35%;
    background-color: #0a014f;
    color: #fff;
    padding: 0.6rem 0;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    align-self: start;
    border-radius: 5px;
    transition: background-color 0.4s ease-in-out;
    text-decoration: none;
    text-align: center;

    @media ${device.mobileS} {
        position: relative;
        left: 25px;
    }

    &:hover {
        background-color: #400abd;
    }
`;

function PollButton(props) {
    const { label, id, poll } = props;
    console.log(`Poll Button`, poll);
    return (
        <>
            <Button to={{ pathname: `/${id}`, state: { poll } }}>
                {label}
            </Button>
            <Route to={`/${id}`} component={PollView} />
        </>
    );
}

PollButton.propTypes = {
    label: propTypes.string,
};

export default withRouter(PollButton);
