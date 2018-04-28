import React,{Component} from 'react';

import{
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

import firebase from 'firebase';

import { Container, Content, Icon, Header, Body,Spinner,Button,Text,Root } from 'native-base';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';

import Login from './Screen/LoginForm';
import SignUpForm from './Screen/SignUpForm';
import Home from './Screen/Home';

export default class App extends Component {
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
      }
      else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button block rounded warning style={{ margin: 30 }} onPress={() => firebase.auth().signOut()}>
            <Text style={{ fontSize: 18 }}>Log Out</Text>
          </Button>
        );

      case false:
        return (
            <LoginForm />
        );

      default:
        return <Spinner size='large' color='orange' />;   
    }
  }

  render() {
    return (
<Root>
  <Nav />
  </Root>
    );
}
}
const Nav = StackNavigator({
  Login : { screen: Login},
  SignUpForm: { screen: SignUpForm},
  Home: {screen: Home}
  },
  {
    initialRouteName: 'Login',
  }
)

