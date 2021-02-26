// React
import React from 'react';
import styled from 'styled-components';

/** Main container of the form */
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 400px;
    padding-top: 1rem;
    background-color: transparent;
    align-items: center;
    margin-top: 2rem;

    @media (max-width: 448px) {
        width: 80%;
    }
`
/** Form inputs for text */
const FormInput = styled.input`
    width: 200px;
    height: 20px;
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
    margin-top: 0.2rem;

    @media (max-width: 448px) {
        width: 80%;
    }
`
/** CVV field component */
const CVVInput = styled.input`
    width: 50px;
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
    margin-top: 0.2rem;
`

/** Error messages */
const ErrorMessage = styled.span`
    color: rgba(255, 0, 0);
    margin-top: -0.9rem;
    margin-bottom: 1rem;
`
/** Used to group the
 * expiry month and year together
 */
const ExpiryDateGroup = styled.div`
    width: 200px;
    margin-top: 0.2rem;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
/**
 * Expiry month field
 */
const ExpiryMonthSelect = styled.select`
    width: 100px;
    padding: 12px 0px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
    background-color: white;
`
/**
 * Expiry year field
 */
const ExpiryYearInput = styled.input`
    width: 60px;
    padding: 12px 0px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
    background-color: white;
`
/**
 * Credit card form which updates
 * the fields of the card in live time
 * @param {*} param0 
 */
function CreditCardForm({ 
    errors,
    firstName,
    lastName,
    cardNumber,
    cvv,
    expYear,
    handleFirstNameChange,
    handleLastNameChange,
    handleCardNumberChange,
    handleCVVChange,
    handleExpYearChange,
    handleExpMonthChange
}) {
    return (
        <FormContainer>
            <h2>Enter your details below</h2>
            {/** First name field */}
            <label htmlFor="First Name">First Name</label>
            <FormInput
                style={{ border: errors.firstName && 'solid 2px red'}}
                type="text" onChange={handleFirstNameChange}
                name="First Name"
                placeholder="Your first name..."
                value={firstName}
            />
            { errors.firstName && <ErrorMessage>Names cannot have numbers or special characters!</ErrorMessage> }
            {/** Last name field */}
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
            {/** Card number field */}
            <label htmlFor="Card Number">Card Number</label>
            <FormInput
                type="text"
                onChange={handleCardNumberChange}
                name="Card Number"
                placeholder="Your card number..."
                value={cardNumber}
            />
            { errors.cardNumber && <ErrorMessage>Field must contain only numbers!</ErrorMessage> }
            {/** Expiry date field */}
            <label htmlFor="Expiry Date Group">Expiry Date</label>
            <ExpiryDateGroup name="Expiry Date Group">
                {/** Expiry month field */}
                <ExpiryMonthSelect onChange={handleExpMonthChange}>
                    {
                        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                        .map((month, idx) => <option key={month} value={idx + 1}>{month}</option>)
                    }
                </ExpiryMonthSelect>
                {/** Expiry year field */}
                <ExpiryYearInput value={expYear} onChange={handleExpYearChange} placeholder="Year"/>
            </ExpiryDateGroup>
            { errors.expYear && <ErrorMessage>Years can only be numbers!</ErrorMessage> }
            <label htmlFor="CVV">CVV</label>
            {/** CVV field */}
            <CVVInput
                name="CVV"
                onChange={handleCVVChange}
                value={cvv}
            />
        </FormContainer>
    )
}

export default CreditCardForm;

