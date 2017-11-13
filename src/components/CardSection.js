// CardSection.js
import React from 'react';
import {CardElement} from 'react-stripe-elements';

class CardSection extends React.Component {

    render() {
        return (
            <div className='checkoutContainer'>
            <form onSubmit={this.props.onSubmit}>
                <fieldset className='checkoutFieldset'>
                <div className='row'>
                    <label className='checkoutLabel'>Name</label>

                    <input className='checkoutInput'  type="text" placeholder="Jane Doe"/>
                </div>
                <div className='row'>
                    <label className='checkoutLabel'>Email</label>
                    <input className='checkoutInput'  type="email" placeholder="jane.doe@example.com"/>
                </div>
                <div style={{padding:'10px'}}>
                    <CardElement style={{
                        base:{
                            color:'white',
                            iconColor: '#c4f0ff',
                            '::placeholder': {
                                color: '#87BBFD',
                                }},
                        invalid: {
                        color: '#FFC7EE',
                    }
                    }}/>
                </div>
                </fieldset>
                <button className="checkoutButton">Pay $25</button>

            </form></div>
        );
    }
};

export default CardSection;