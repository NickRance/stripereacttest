// CheckoutForm.js
import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import '../styles/paymentForm.css'

// import AddressSection from './AddressSection';
import CardSection from './CardSection';

class CheckoutForm extends React.Component {
    handleSubmit = (ev) => {
        // We don't want to let default form submission happen here, which would refresh the page.
        ev.preventDefault();
        // console.log(ev);

        // Within the context of `Elements`, this call to createToken knows which Element to
        // tokenize, since there's only one in this group.
        this.props.stripe.createToken({name: document.getElementById('name').value}).then(({token,error}) => {
            this.stripeTokenHandler(token);
            // console.log('Received Stripe token:', token);
        });

        // However, this line of code will do the same thing:
        // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    };

    stripeTokenHandler = (token)=> {
        console.log('Received Stripe token:', token);
        var myHeaders = new Headers();
        const myInit = { method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default' };
        fetch('https://testingstripeserver.herokuapp.com/stripe/subscriptions', myInit)
            .then((result) => {
            return(result.json());
        }).then((jsonResult) => {
            console.log(jsonResult);
        })
    };

    render() {
        return (
            <CardSection onSubmit={this.handleSubmit}/>
        );
    }
}

export default injectStripe(CheckoutForm);