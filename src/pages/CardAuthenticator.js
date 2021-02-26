// React
import React, { useState } from 'react';
// Material UI Components
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
// Styling
import styled from 'styled-components';
// Components
import CreditCard from '../components/CardAuthenticator/CreditCard';
import CreditCardForm from '../components/CardAuthenticator/CreditCardForm';

/** Main container of the page */
const CardAuthenticatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 900px;
`
/**
 * Page for the /card route.
 * Users can enter in credit card fields for them
 * to be displayed on a credit card 
 */
function CardAuthenticator() {

    /** Fields of the card */
    const [firstName, setFirstName] = useState('NAME');
    const [lastName, setLastName] = useState('HERE');
    const [cardNumber, setCardNumber] = useState('1234123412341234');
    const [expMonth, setExpMonth] = useState('01');
    const [expYear, setExpYear] = useState('2024');
    const [CVV, setCVV] = useState('111');
    /** Brief message displayed at the top of the page
     * which instructs the user on how to flip the card
     */
    const [openSnackbar, setOpenSnackbar] = useState(true);
    /** Used to determine if error messages need
     * to be displayed on the form.
     */
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        cardNumber: false,
        CVV: false,
        expYear: false
    })
    /**
     * Used to handle the first name field
     * @param {*} e - Event Object
     */
    const handleFirstNameChange = (e) => {
        /** Regex to determine if field only has letters */
        const letters = /^[A-Za-z]+$/;
        const name = e.target.value;
        /** Maximum first name length is 18 */
        if (name.length > 18) {
            return;
        }
        /** Checks if first name contains letters only */
        if (!name.match(letters) && name.length > 0) {
            /** If it doesn't, show errors for first name */
            setErrors(prevState => ({ ...prevState, firstName: true }));
        } else {
            /** Removes errors for first name and sets it */
            setErrors(prevState => ({ ...prevState, firstName: false }));
            setFirstName(name);
        }
    }
    /**
     * Used to handle the last name field
     * @param {*} e - Event Object
     */
    const handleLastNameChange = (e) => {
        /** Regex to determine if field only has letters */
        const letters = /^[A-Za-z]+$/;
        const name = e.target.value;
         /** Maximum first name length is 18 */
        if (name.length > 18) {
            return;
        }
        /** Checks if last name contains letters only */
        if (!name.match(letters) && name.length > 0) {
            /** If it doesn't, show errors for last name */
            setErrors(prevState => ({ ...prevState, lastName: true }));
        } else {
            /** Removes errors for last name and sets it */
            setErrors(prevState => ({ ...prevState, lastName: false }));
            setLastName(name);
        }
    }
    /**
     * Used to handle card number field
     * @param {*} e - Event Object
     */
    const handleCardNumberChange = (e) => {
        /** Regex to determine if field only has numbers */
        const numbers = /^[0-9]*$/;
        const cardNum = e.target.value;
        /** Maximum card number length is 16 */
        if (cardNum.length > 16) {
            return;
        }
        /** Checks if card number contains numbers only */
        if (!cardNum.match(numbers) && cardNum.length > 0) {
            /** If it doesn't, show errors for card number */
            setErrors(prevState => ({ ...prevState, cardNumber: true }));
        } else {
            /** Removes errors for card number and sets it */
            setErrors(prevState => ({ ...prevState, cardNumber: false }));
            setCardNumber(cardNum);
        }
    }
    /**
     * Used to handle expiry month field
     * @param {*} e - Event Object
     */
    const handleExpMonthChange = (e) => {
        let month = e.target.value;
        /** If the month is single digit, add a 0 at the front */
        if (month < 10) {
            month = '0' + month;
        }
        setExpMonth(month);

    }
    /**
     * Used to handle expiry year field
     * @param {*} e - Event Object
     */
    const handleExpYearChange = (e) => {
        /** Regex to determine if field only has numbers */
        const numbers = /^[0-9]*$/;
        const year = e.target.value;
        /** If year has more than 4 digits, don't change year */
        if (year.length > 4) {
            return;
        }
        /** Checks if year contains numbers only */
        if (!year.match(numbers) && year.length > 0) {
            /** If it doesn't, show errors for year */
            setErrors(prevState => ({...prevState, expYear: true }));
        } else {
            /** Removes errors for year and sets it */
            setErrors(prevState => ({...prevState, expYear: false}));
            setExpYear(year);
        }
    }
    /**
     * Used to handle CVV field
     * @param {*} e - Event object 
     */
    const handleCVVChange = (e) => {
        /** Regex to determine if field only has numbers */
        const numbers = /^[0-9]*$/;
        const CVVNum = e.target.value;
        /** If CVV has more than 4 digits, don't change CVV */
        if (CVVNum.length > 3) {
            return;
        }
        /** Checks if CVV contains numbers only */
        if (!CVVNum.match(numbers) && CVVNum.length >= 0) {
            /** If it doesn't, show errors for CVV */
            setErrors(prevState => ({...prevState, CVV: true }));
        } else {
            /** Removes errors for CVV and sets it */
            setErrors(prevState => ({...prevState, CVV: false }));
            setCVV(CVVNum);
        }
    }
    /**
     * Used to handle snackbar message at the top
     */
    const handleSnackbarClose = (event, reason) => {
        /** Does not close snackbar if clicked away from it */
        if (reason === 'clickaway') {
            return;
        }
        /** Closes snackbar */
        setOpenSnackbar(false);
    }

    return (
        <CardAuthenticatorContainer>
            {/** Instruction message at the top */}
            <Snackbar 
                style={{ 
                    backgroundColor: '#66CD00',
                    color: 'white',
                    padding: '0.4rem',
                    width: '300px',
                    fontWeight: 'bold',
                    borderRadius: '3px'
                }}
                open={openSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
            >
                <>
                    <span>Click on the card to flip it!</span>
                    <IconButton
                        onClick={handleSnackbarClose}
                        size="small" aria-label="close" color="inherit"
                        style={{
                            marginLeft: '2rem' 
                        }}
                    >
                        <CloseIcon fontSize="small"/>
                    </IconButton>
                </>
            </Snackbar>
            {/** Credit card component */}
            <CreditCard
                errors={errors}
                firstName={firstName}
                lastName={lastName}
                cardNumber={cardNumber}
                cvv={CVV}
                expMonth={expMonth}
                expYear={expYear}
            />
            {/** Credit card form */}
            <CreditCardForm
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
                handleCardNumberChange={handleCardNumberChange}
                handleCVVChange={handleCVVChange}
                handleExpMonthChange={handleExpMonthChange}
                handleExpYearChange={handleExpYearChange}
                firstName={firstName}
                lastName={lastName}
                cardNumber={cardNumber}
                cvv={CVV}
                expMonth={expMonth}
                expYear={expYear}
                errors={errors}
            />
        </CardAuthenticatorContainer>
    )
}

export default CardAuthenticator
