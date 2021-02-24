import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: white;
`

const HomeHeading = styled.h1`
    font-size: 7em;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: black;
`

const ClickHereButton = styled(Button)`
    && {
        color: white;
        background-color: #5F3F7A;

        &:hover {
            background-color: purple;
        }
    }

`

function Home() {

    const history = useHistory();

    return (
        <HomeContainer>
            <HomeHeading>
                CardForm
            </HomeHeading>
            <p style={{ color: 'black', fontSize: '1.3em' }}>A card component and form for you to use!</p>
            <ClickHereButton
                onClick={() => history.push('/card')}
            >
                Click here!
            </ClickHereButton>
        </HomeContainer>
    )
}

export default Home
