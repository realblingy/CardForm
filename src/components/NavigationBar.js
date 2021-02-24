import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import LogoImage from '../images/credit-card.png'
import HomeIcon from '@material-ui/icons/Home';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { useHistory } from 'react-router-dom';

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

const NavigationBarButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
`

const Logo = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 1rem;
    margin-right: 1rem;
`

const LogoGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

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

function NavigationBar() {

    const history = useHistory();

    return (
        <NavigationBarContainer>
            <LogoGroup>
                <Button onClick={() => history.push('/')}>
                    <Logo src={LogoImage}/>
                    <h1 style={{ fontSize: '1.2em', color: 'white' }}>CardForm</h1>
                </Button>
            </LogoGroup>
            <NavigationBarButtonGroup>
                <NavigationBarIconButton
                    onClick={() => history.push('/')}
                >
                    <HomeIcon/>
                </NavigationBarIconButton>
                <NavigationBarIconButton
                    onClick={() => history.push('/card')}
                >
                    <CreditCardIcon/>
                </NavigationBarIconButton>
            </NavigationBarButtonGroup>
        </NavigationBarContainer>
    )
}

export default NavigationBar
