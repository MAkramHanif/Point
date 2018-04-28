import React, { Component } from 'react';

import firebase from 'firebase';

import { Spinner, Root } from 'native-base';

import Login from './LoginForm';
import Home from './Home';

export default class Initial extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })
    
    state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAxnNcpGyolLfpJtEq_d3aBr4xFu82_aVs',
      authDomain: 'pointhub-5d8fb.firebaseapp.com',
      databaseURL: 'https://pointhub-5d8fb.firebaseio.com',
      projectId: 'pointhub-5d8fb',
      storageBucket: 'pointhub-5d8fb.appspot.com',
      messagingSenderId: '557758033526'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Home />
        );

      case false:
        return (
            <Login />
        );

      default:
        return <Spinner size='large' color='orange' />;   
    }
  }

  render() {
    return (
<Root>
  {this.renderContent()}
  </Root>
    );
}
}
