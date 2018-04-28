import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Initial from './Screen/Initial';
import SignUpForm from './Screen/SignUpForm';

export default class App extends Component {
  render() {
    return (
      <Nav />
    );
}
}

const Nav = StackNavigator({
  Initial: { screen: Initial },
  SignUpForm: { screen: SignUpForm }
  },
  {
    initialRouteName: 'Initial',
  }
);

