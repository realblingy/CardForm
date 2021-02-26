// React
import React, { useState } from 'react';
// Styling
import styled from 'styled-components';
// Credit Card Logo Images
import MasterCardLogo from '../../images/mc_symbol.svg';
import VisaLogo from '../../images/visa.svg';
import AmexLogo from '../../images/amex.svg'
import DiscoverLogo from '../../images/discover.svg'
import DinersLogo from '../../images/diners.svg'
import JCBLogo from '../../images/jcb.svg';
import LogoImage from '../../images/credit-card.png'

/**
 * Main container of the credit card component
 */
const CreditCardContainer = styled.div`
    width: 428px;
    height: 270px;
    perspective: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media (max-width: 448px) {
        width: 80vw;
        height: 50vw;
    }
`
/**
 * Credit card's inner component which
 * can be flipped.
 */
const CreditCardInner = styled.div`
    border-radius: 5px;
    border: solid 2px;
    background: linear-gradient(90deg, rgba(150,144,255,1) 0%, rgba(0,212,255,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
`
/**
 * Credit card's front component which is wrapped
 * by CreditCardInner
 */
const CreditCardFront = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    color: black;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`
/**
 * Credit card's back component which is wrapped
 * by CreditCardInner
 */
const CreditCardBack = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    transform: rotateY(180deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`
/**
 * Credit card's name component 
 */
const Name = styled.span`
    position: absolute;
    bottom: 10%;
    left: 10%;

    @media (max-width: 448px) {
        font-size: 3vw;
    }
`
/**
 * Credit card's number component 
 */
const CardNumber = styled.span`
    position: absolute;
    bottom: 35%;
    font-size: 1.5em;
    left: 10%;

    @media (max-width: 448px) {
        font-size: 4vw;
    }
`
/**
 * Credit card's scanner component 
 * at the back
 */
const CardScanner = styled.div`
    width: 100%;
    height: 15%;
    background-color: black;
    top: 10%;
    position: absolute;

`
/**
 * Credit card's CVV component
 */
const CVV = styled.div`
    width: 55%;
    height: 30px;
    background-color: gray;
    position: absolute;
    top: 40%;
    border-radius: 2px;
    padding-right: 1rem;
    margin-left: 1rem;
    display: flex;
    justify-content: flex-end;
`
/**
 * Credit card's Logo component
 * on the top left of the front 
 */
const Logo = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 5%;
    left: 5%;

    @media (max-width: 448px) {
        height: 6vw;
        width: 6vw;
    }
`
/**
 * Credit card's type (MasterCard, Visa, etc...)
 * displayed as its logo
 */
const CardType = styled.img`
    position: absolute;
    height: 55px;
    width: min(100%, 60px);
    bottom: 10%;
    right: 5%;
`
/**
 * Credit card's expiry date in the form of
 * (DD/YYYY)
 */
const ExpiryDate = styled.div`
    position: absolute;
    left: 20%;
    bottom: 20%;

    @media (max-width: 448px) {
        font-size: 3vw;
    }
`
/**
 * Credit card's expiry date label
 * which says 'Expiry Date'
 */
const ExpiryDateLabel = styled.label`
    position: absolute;
    bottom: 26%;
    font-size: 0.8em;
    left: 20%;

    @media (max-width: 448px) {
        font-size: 3vw;
    }
`
/**
 * Credit card component which is used in the
 * /card route and CardAuthenticator component
 */
function CreditCard({ cardNumber, cvv, expMonth, expYear, firstName, lastName }) {
    /** Used to determine is card is flipped or not */
    const [flipped, setFlipped] = useState(false);
    /** Returns the logo of the credit card's company
     * based on its card number
     */
    const getCardType = (cardNumber) => {
        // Visa
        let re = /^4/;
        if (cardNumber.match(re))
            return VisaLogo;
        // MasterCard
        re = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
        if (cardNumber.match(re)) 
            return MasterCardLogo;
        // American Express
        re = /^3[47]/;
        if (cardNumber.match(re))
            return AmexLogo;
        // Discover
        re = /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/;
        if (cardNumber.match(re))
            return DiscoverLogo;
        // Diners
        re = /^36/;
        if (cardNumber.match(re))
            return DinersLogo;
        // JCB
        re = /^35(2[89]|[3-8][0-9])/;
        if (cardNumber.match(re))
            return JCBLogo;
        // None otherwise
        return null;
    }
    /** Spaces out the card every 4 digits */
    const cardNumberStringify = (cardNum) => {
        let cardNumString = ''
        // Loops over call of the card's digits
        for (let i = 0; i < cardNum.length; i++) {
            // Adds to cardNumString
            cardNumString += cardNum.charAt(i);
            // Adds a space if i is divisible by 4 and not at the start or end
            if ((i + 1) % 4 === 0 && ((i !== 0) || (i !== cardNum.length))) {
                cardNumString += ' ';
            }
        }
        return cardNumString;
    }

    return (
        <CreditCardContainer
            onClick={() => setFlipped(!flipped)}
        >
            <CreditCardInner
                style={flipped ? { transform: 'rotateY(180deg)'} : null }
            >
                {/** Front component of the card */}
                <CreditCardFront>
                    <Logo src={LogoImage}/>
                    <ExpiryDateLabel htmlFor="expiryDate">
                        Expiry Date
                    </ExpiryDateLabel>
                    <ExpiryDate name="expiryDate">
                        {expMonth}/{expYear}
                    </ExpiryDate>
                    <Name>
                        {firstName.toUpperCase()} {lastName.toUpperCase()}
                    </Name>
                    <CardNumber>
                        {cardNumberStringify(cardNumber)}
                    </CardNumber>
                    {getCardType(cardNumber) && <CardType src={getCardType(cardNumber)} />}
                </CreditCardFront>
                {/** Back component of the card */}
                <CreditCardBack>
                    <CVV>
                        {cvv}
                    </CVV>
                    <CardScanner />
                </CreditCardBack>
            </CreditCardInner>
        </CreditCardContainer>
    )
}

export default CreditCard;