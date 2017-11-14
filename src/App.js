import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyStoreCheckout from './screens/MyStoreCheckout';
import {StripeProvider} from 'react-stripe-elements';

class App extends Component {
  render() {
      return (
          <StripeProvider apiKey="pk_test_AgSJFVIZrO3uybiIFtqm5dQV">
              <MyStoreCheckout />
          </StripeProvider>
      );
  }
}

export default App;
