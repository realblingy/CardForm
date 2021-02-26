// React
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
// Material UI components
import { Button, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CreditCardIcon from '@material-ui/icons/CreditCard';
// Logo
import LogoImage from '../images/credit-card.png'
// Main container of the navigation bar
const NavigationBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    background-color: #5F3F7A; 
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
    color: white;
`
// Main container for the navigation buttons
const NavigationBarButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
`
// Container for Logo
const Logo = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 1rem;
    margin-right: 1rem;

    @media (max-width: 448px) {
        width: 6vw;
        height: 6vw;
    }
`
// Groups the Logo Image and its names
const LogoGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
// Wraps the navigation icons as a button
const NavigationBarIconButton = styled(IconButton)`
    && {
        color: white;
        height: 50px;
        width: 50px;

        &:hover {
            background-color: cross-fade(25%, );
        }
    }
`
/**
 * Displayed on the top of the app where users
 * can navigate between routes
 */
function NavigationBar() {
    // Used to redirect to different routes
    const history = useHistory();

    return (
        <NavigationBarContainer>
            {/** Logo and its name */}
            <LogoGroup>
                <Button onClick={() => history.push('/')}>
                    <Logo src={LogoImage}/>
                    <h1 style={{ fontSize: 'min(1.2em, 6vw)', color: 'white' }}>CardForm</h1>
                </Button>
            </LogoGroup>
            {/** Navigation Buttons */}
            <NavigationBarButtonGroup>
                {/** Home Button */}
                <NavigationBarIconButton
                    onClick={() => history.push('/')}
                >
                    <HomeIcon/>
                </NavigationBarIconButton>
                {/** Card Button */}
                <NavigationBarIconButton
                    onClick={() => history.push('/card')}
                >
                    <CreditCardIcon/>
                </NavigationBarIconButton>
            </NavigationBarButtonGroup>
        </NavigationBarContainer>
    )
}

export default NavigationBar;
