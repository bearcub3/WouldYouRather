import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const ProfileAvatar = styled.div`
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center center;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: inline-block;
    border: 3px solid #cd9fcc;
    margin: 0 1rem;
    cursor: pointer;
`;

const Float = styled(Link)`
    position: absolute;
    top: 50px;
    left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 35px;
    border: 1px solid #e1e1e1;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 2px 3px 2px -1px rgba(0, 0, 0, 0.12);
    font-weight: 500;
    font-size: 0.85rem;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #cd9fcc;
    }
`;

function Avatar(props) {
    return (
        <div style={{ position: `relative` }}>
            <ProfileAvatar img={props.img} />
        </div>
    );
}

function mapStateToProps({ authedUser, dispatch }) {
    return {
        authedUser,
        dispatch,
    };
}

export default withRouter(connect(mapStateToProps)(Avatar));

{
    /* <Float
                to="/login"
                onClick={() => dispatch(handleAuthentication(null))}
            >
                Log Out
            </Float> */
}
