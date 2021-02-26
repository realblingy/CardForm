// React
import React from 'react';
import { useHistory } from 'react-router-dom';
// Material UI components
import { Button } from '@material-ui/core';
// Styling
import styled from 'styled-components';
/** 
 * Main container of the page  
 */
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: white;
`
/** 
 * Main title of the page which shows
 * the app's name and a brief description
 */
const HomeHeading = styled.h1`
    font-size: 7em;
    color: black;
    @media (max-width: 448px) {
        font-size: 10vw;
    }
`
/**
 * Used to redirect the user to the /card route,
 */
const ClickHereButton = styled(Button)`
    && {
        color: white;
        background-color: #5F3F7A;
        &:hover {
            background-color: purple;
        }
    }
`
/**
 * Home page where users are given the name
 * of the web app (CardForm) and a brief
 * description. Users can click on the ClickHereButton
 * to be redirected to the /card route.
 */
function Home() {
    /** Used to navigate between routes */
    const history = useHistory();

    return (
        <HomeContainer>
            {/** Home page title */}
            <HomeHeading>
                CardForm
            </HomeHeading>
            {/** Home page description */}
            <p style={{ color: 'black', fontSize: '1.3em' }}>A card component and form for you to use!</p>
            {/** Redirects user to /card route */}
            <ClickHereButton
                onClick={() => history.push('/card')}
            >
                Click here!
            </ClickHereButton>
        </HomeContainer>
    )
}

export default Home
