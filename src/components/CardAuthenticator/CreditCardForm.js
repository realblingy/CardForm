import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 400px;
    padding-top: 1rem;
    background-color: transparent;
    align-items: center;
    margin-top: 2rem;
`
const FormInput = styled.input`
    width: 200px;
    height: 20px;
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
    margin-top: 0.2rem;
`
const ErrorMessage = styled.span`
    color: rgba(255, 0, 0);
    margin-top: -0.9rem;
    margin-bottom: 1rem;
`

const ExpiryDateGroup = styled.div`
    width: 200px;
    height: 20px;
    padding: 12px 20px;
    margin-top: 0.2rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ExpiryDateMonthInput = styled.input`
    width: 40%;
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
    margin-top: 0.2rem;
`

const CVVInput = styled.input`
    width: 40%;
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
    margin-top: 0.2rem;
`


function CreditCardForm({ errors, firstName, lastName, cardNumber, cvv, handleFirstNameChange, handleLastNameChange, handleCardNumberChange, handleCVVChange }) {
    return (
        <FormContainer>
            <h2>Enter your details below</h2>
            <label htmlFor="First Name">First Name</label>
            <FormInput
                style={{ border: errors.firstName && 'solid 2px red'}}
                type="text" onChange={handleFirstNameChange}
                name="First Name"
                placeholder="Your first name..."
                value={firstName}
            />
            { errors.firstName && <ErrorMessage>Names cannot have numbers or special characters!</ErrorMessage> }
            <label htmlFor="Last Name">Last Name</label>
            <FormInput
                style={{ border: errors.lastName && 'solid 2px red'}}
                type="text"
                onChange={handleLastNameChange}
                name="Last Name"
                placeholder="Your last name..."
                value={lastName}
            />
            { errors.lastName && <ErrorMessage>Names cannot have numbers or special characters!</ErrorMessage> }
            <label htmlFor="Card Number">Card Number</label>
            <FormInput
                type="text"
                onChange={handleCardNumberChange}
                name="Card Number"
                placeholder="Your card number..."
                value={cardNumber}
            />
            { errors.cardNumber && <ErrorMessage>Field must contain only numbers!</ErrorMessage> }
            <ExpiryDateGroup name="Expiry Date Group">
                    <label htmlFor="Expiry Date">Expiry Date</label>
                    <ExpiryDateMonthInput name="Expiry Date">

                    </ExpiryDateMonthInput>
                    <label htmlFor="CVV">CVV</label>
                    <CVVInput
                        onChange={handleCVVChange}
                        value={cvv}
                    >

                    </CVVInput>
            </ExpiryDateGroup>
        </FormContainer>
    )
}

export default CreditCardForm
