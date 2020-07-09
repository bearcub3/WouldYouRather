import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as Ribbon } from '../images/ribbon.svg';

import { device } from '../utils/device-unit';
import { useResize } from '../context/resize';

import Avatar from '../components/Avatar';

const Container = styled.div`
    @media ${device.laptopL} {
        width: 60%;
    }

    @media ${device.mobileM} {
        width: 80%;
    }
    display: grid;
`;

const H2 = styled.h2`
    font-family: 'Galada', cursive;
    color: #f6caca;
    font-size: 1.8rem;
`;

const Participant = styled.div`
    position: relative;
    margin: 1rem 0;
    display: grid;
    align-items: center;
    border-radius: 10px;
    border: 3px solid #0a014f;
    color: #0a014f;
    padding: 1rem;
    grid-template-columns: 25% auto 15%;
    grid-template-rows: 40% auto auto;

    @media ${device.tablet} {
        width: 100%;
        grid-template-columns: 35% 45% auto;
        grid-template-rows: 40% auto auto;
    }

    @media ${device.mobileM} {
        width: 90%;
        grid-template-columns: 65% auto;
        grid-template-rows: 40% auto auto;
    }
`;

const Name = styled.p`
    font-family: 'Galada', cursive;
    font-size: 1.5rem;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-top: 0;

    @media ${device.mobileM} {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }
`;

const Vote = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    @media ${device.mobileM} {
        font-size: 0.9rem;
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
`;

const Create = styled.div`
    grid-column: 2 / 3;
    grid-row: 3 / 4;

    @media ${device.mobileM} {
        font-size: 0.9rem;
        grid-column: 1 / 2;
        grid-row: 3 / 4;
    }
`;

const Number = styled.span`
    color: #400abd;
    font-weight: 700;
    font-size: 1.2rem;
`;

const ScoreBoard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: #e4c2c6;
    color: #fff;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 2.5rem;
    grid-column: 3;
    grid-row: 1 / span 4;
`;

function Leaderboard(props) {
    const { totalScore } = props;
    const { isMobile } = useResize();

    const top3 = totalScore.slice(0, 3);
    console.log(top3);

    return (
        <Container>
            <H2>Leaderboard</H2>
            {top3.map((user, idx) => (
                <Participant>
                    {isMobile ? null : (
                        <>
                            <Number
                                style={{
                                    zIndex: `10`,
                                    position: `absolute`,
                                    left: `15px`,
                                    top: `50%`,
                                    transform: `translateY(-50%)`,
                                    fontSize: `1.6rem`,
                                    color: `#fff`,
                                }}
                            >
                                {++idx}
                            </Number>
                            <Ribbon
                                width="70"
                                style={{
                                    display: `inline-flex`,
                                    position: `absolute`,
                                }}
                            />
                        </>
                    )}

                    {isMobile ? null : (
                        <div style={{ gridRow: `1 / span 3` }}>
                            <Avatar img={user.avatar} size={100} />
                        </div>
                    )}
                    <Name>{user.name}</Name>
                    <Vote>
                        has voted <Number>{user.voted}</Number> polls.
                    </Vote>
                    <Create>
                        has created <Number>{user.created}</Number> polls.
                    </Create>
                    <ScoreBoard>{user.score}</ScoreBoard>
                </Participant>
            ))}
        </Container>
    );
}

function mapStateToProps({ users }) {
    return {
        totalScore: Object.entries(users)
            .map(([key, value]) => ({
                name: users[key].name,
                avatar: users[key].avatarURL,
                voted: Object.keys(users[key].answered).length,
                created: Object.keys(users[key].questions).length,
                score:
                    Object.keys(users[key].answered).length +
                    Object.keys(users[key].questions).length,
            }))
            .sort((a, b) => b.score - a.score),
    };
}

export default connect(mapStateToProps)(Leaderboard);
