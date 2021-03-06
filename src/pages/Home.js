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
    height: 500px;
    color: white;

    @media (min-height: 600px) {
        height: 100%;
    }
`
/** 
 * Main title of the page which shows
 * the app's name and a brief description
 */
const HomeHeading = styled.h1`
    font-size: 7em;
    color: black;
    @media (max-width: 608px) {
        font-size: 15vw;
    }
`
/**
 * Brief description of the web application
 */
const HomeDescription = styled.p`
    color: black;
    font-size: 1.3em;
    @media (max-width: 608px) {
        font-size: 3vw;
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
            <HomeDescription>
                A card component and form for you to use!
            </HomeDescription>
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
