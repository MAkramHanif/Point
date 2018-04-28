import React, { Component } from 'react';
import { Container, Button, Icon, Text, Left, Right, Body, Spinner,
         Header, Content, Form, Item, Input, Label, Title, Toast } from 'native-base';
import { StatusBar } from 'react-native';
import firebase from 'firebase';

export default class SignUpForm extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })
    constructor(props) {
    super(props);
    this.state = {
      showToast: false, name: '', email: '', password: '', repassword: '', rollnum: '', pickup: '', loading: false
    };
}
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ loading: true });
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(this.createUserSuccess.bind(this))
    .catch(this.createUserFail.bind(this));
  }
 
  createUserFail() {
    Toast.show({
        text: 'Account Creation Failed!',
        buttonText: 'Okay',
        type: 'danger',
        duration: 3000
      });
      this.setState({ loading: false });
}

  createUserSuccess() {
     const { name, pickup, rollnum, email, password, } = this.state;
     const { currentUser } = firebase.auth();
     firebase.database().ref(`/users/${currentUser.uid}`).push({ name, email, password, pickup, rollnum });

    Toast.show({
      text: 'Account Created!',
      buttonText: 'Okay',
      type: 'success',
      duration: 3000
    });
    this.setState({ loading: false });
    this.props.navigation.navigate('Initial');
  }

  renderButton() {
    if (this.state.loading) {
        return <Spinner size='large' color='orange' />;   
    }
    return (
        <Button block rounded warning style={{ margin: 20 }} onPress={this.onButtonPress.bind(this)} >
            <Text style={{ fontSize: 18 }}>Sign Up</Text>
        </Button>

    );
}
  render() {
    return (
      <Container >
         <StatusBar 
                    backgroundColor="#2d3436"
                    barStyle="light-content"
         />
        <Header style={{ backgroundColor: '#2d3436' }}>
          <Left>
            <Button transparent>
              <Icon onPress={()=> this.props.navigation.navigate('Initial')} name='arrow-back' />
            </Button>
          </Left>
            <Body>
            <Title>Sign Up</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon onPress={()=>this.props.navigation.navigate('Initial')} name='close' />
            </Button>
          </Right>       
        </Header>

        <Content>
          <Form>
            <Item stackedLabel style={{ width: 280 }}>
              <Label>Full Name</Label>
              <Input
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
              />
            </Item>
            <Item stackedLabel >
              <Label>Roll Number</Label>
              <Input 
                onChangeText={rollnum => this.setState({ rollnum })}
                value={this.state.rollnum}
              />
            </Item>
            <Item stackedLabel >
              <Label>PickUp Location</Label>
              <Input 
                onChangeText={pickup => this.setState({ pickup })}
                value={this.state.pickup}                
              />
            </Item>
            <Item stackedLabel >
              <Label>Email Address</Label>
              <Input  
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </Item>
            <Item stackedLabel >
              <Label>Password</Label>
              <Input 
                secureTextEntry
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Confirm Password</Label>
              <Input secureTextEntry />
            </Item>
            {this.renderButton()}

          </Form>
        </Content>
      </Container>
    );
  }
}