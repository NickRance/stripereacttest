// MyStoreCheckout.js
import React from 'react';
import {Elements} from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm';
import PaymentRequestForm from '../components/PaymentRequestForm'

class MyStoreCheckout extends React.Component {
    render() {
        return (
            <Elements>
                <CheckoutForm />
                {/*<PaymentRequestForm/>*/}
            </Elements>
        );
    }
}

export default MyStoreCheckout;