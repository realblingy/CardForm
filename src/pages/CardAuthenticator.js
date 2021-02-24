import React, { useState } from 'react';
import styled from 'styled-components';
import CreditCard from '../components/CardAuthenticator/CreditCard';
import CreditCardForm from '../components/CardAuthenticator/CreditCardForm';

const CardAuthenticatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 900px;
`

function CardAuthenticator() {

    const [firstName, setFirstName] = useState('NAME');
    const [lastName, setLastName] = useState('HERE');
    const [cardNumber, setCardNumber] = useState('1234123412341234');
    const [expDate, setExpDate] = useState('/');
    const [CVV, setCVV] = useState();
    const [errors, setErrors] = useState({ firstName: false, lastName: false, cardNumber: false, CVV: false })

    const handleFirstNameChange = (e) => {
        const letters = /^[A-Za-z]+$/;
        const name = e.target.value;

        if (name.length > 18) {
            return;
        }

        if (!name.match(letters) && name.length > 0) {
            setErrors(prevState => ({ ...prevState, firstName: true }));
        } else {
            setErrors(prevState => ({ ...prevState, firstName: false }));
            setFirstName(name);
        }

    }

    const handleLastNameChange = (e) => {
        const letters = /^[A-Za-z]+$/;
        const name = e.target.value;
        
        if (name.length > 18) {
            return;
        }

        if (!name.match(letters) && name.length > 0) {
            setErrors(prevState => ({ ...prevState, lastName: true }));
        } else {
            setErrors(prevState => ({ ...prevState, lastName: false }));
            setLastName(name);
        }
    }

    const handleCardNumberChange = (e) => {
        const numbers = /^[0-9]*$/;
        const cardNum = e.target.value;

        if (cardNum.length > 16) {
            return;
        }

        if (!cardNum.match(numbers) && cardNum.length > 0) {
            setErrors(prevState => ({ ...prevState, cardNumber: true }));
        } else {
            setErrors(prevState => ({ ...prevState, cardNumber: false }));
            setCardNumber(cardNum);
        }
    }

    const handleExpDate = (e) => {
        const numbers = /[0-9]{2}/;
        const date = e.target.value;
    }

    const handleCVVChange = (e) => {
        const numbers = /^[0-9]*$/;
        const CVVNum = e.target.value;

        if (CVVNum.length > 3) {
            return;
        }

        if (!CVVNum.match(numbers) && CVVNum.length > 0) {
            setErrors(prevState => ({...prevState, CVV: true }));
        } else {
            setErrors(prevState => ({...prevState, CVV: false }));
            setCVV(CVVNum);
        }
    }

    return (
        <CardAuthenticatorContainer>
            <CreditCard
                errors={errors}
                firstName={firstName}
                lastName={lastName}
                cardNumber={cardNumber}
                cvv={CVV}
            />
            <CreditCardForm
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
                handleCardNumberChange={handleCardNumberChange}
                handleCVVChange={handleCVVChange}
                firstName={firstName}
                lastName={lastName}
                cardNumber={cardNumber}
                cvv={CVV}
                errors={errors}
            />
        </CardAuthenticatorContainer>
    )
}

export default CardAuthenticator
