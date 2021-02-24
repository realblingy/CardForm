import React from 'react';
import styled from 'styled-components';

const CreditCardInner = styled.div`
    border-radius: 5px;
    border: solid 2px;
    background: linear-gradient(#2193b0, #6dd5ed);
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

const CreditCardContainer = styled.div`
    width: 428px;
    height: 270px;
    perspective: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &:hover ${CreditCardInner} {
        transform: rotateY(180deg);
    }
`
const CreditCardFront = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    color: black;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`
const CreditCardBack = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    transform: rotateY(180deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`

const Name = styled.span`
    position: absolute;
    bottom: 10%;
    left: 10%;
`
const CardNumber = styled.span`
    position: absolute;
    bottom: 30%;
    font-size: 1.5em;
    left: 10%;
`

const CardScanner = styled.div`
    width: 100%;
    height: 40px;
    background-color: black;
    top: 10%;
    position: absolute;
`

const ErrorMessageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
    border: solid 2px black;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CVVContainer = styled.div`
    width: 60%;
    height: 30px;
    background-color: gray;
    position: absolute;
    top: 40%;
    border-radius: 2px;
    margin-left: 1rem;
    display: flex;
    justify-content: flex-end;
`

const CVV = styled.span`
    margin-right: 0.5rem;
`

const ErrorMessage = styled.h1`
    color: red;
    font-size: 2em;
`

const cardNumberStringify = (cardNum) => {
    let cardNumString = ''
    for (let i = 0; i < cardNum.length; i++) {
        cardNumString += cardNum.charAt(i);
        if ((i + 1) % 4 === 0 && ((i !== 0) || (i !== cardNum.length))) {
            cardNumString += ' ';
        }
    }
    return cardNumString;
}

function CreditCard({ cardNumber, cvv, validFromDate, expiryDate, firstName, lastName, errors }) {
    return (
        <CreditCardContainer>
            {
                (errors.firstName || errors.lastName) ?
                <ErrorMessage>
                    FIX YOUR ERRORS!
                </ErrorMessage>
                :
                <CreditCardInner>
                    <CreditCardFront>
                        <Name>
                            {firstName.toUpperCase()} {lastName.toUpperCase()}
                        </Name>
                        <CardNumber>
                            {cardNumberStringify(cardNumber)}
                        </CardNumber>
                    </CreditCardFront>
                    <CreditCardBack>
                        <CVVContainer>
                            <CVV>
                                {cvv}
                            </CVV>
                        </CVVContainer>
                        <CardScanner />
                    </CreditCardBack>
                </CreditCardInner>
            }
        </CreditCardContainer>
    )
}

export default CreditCard
