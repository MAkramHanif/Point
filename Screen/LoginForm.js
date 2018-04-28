import React, { Component } from 'react';
import firebase from 'firebase';
import { StyleSheet, StatusBar, Image, Dimensions,Text } from 'react-native';
import { Spinner, Container, Toast, Button, Content, Item, Input, Label } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';

const { width, height } = Dimensions.get('window');

export default class Login extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })

    constructor(props) {
        super(props);
        this.state = {
          showToast: false, email: '', password: '', loading: false 
        };
    }

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ loading: true });
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));   
    }

    onLoginFail() {
        Toast.show({
            text: 'Authentication Failure!',
            buttonText: 'Okay',
            type: 'danger',
            duration: 3000
          });
          this.setState({ loading: false });
    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            showToast: false,
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='large' color='orange' />;   
        }
        return (
            <Button block warning style={{ margin: 20 }} onPress={this.onButtonPress.bind(this)} >
                <Text style={{ fontSize: 18 }}>Login</Text>
            </Button>

        );
    }

    render() {
        return (
            <Container style={{ backgroundColor: '#2d3436' }}>
                <StatusBar 
                    backgroundColor="#2d3436"
                    barStyle="light-content"
                />
            <Content>
              <Grid>
                <Row style={{ height: height / 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
                    <Image
                        style={styles.buslogo} 
                        source={require('../images/bus.png')} 
                    />
                    <Image
                        style={styles.logo} 
                        source={require('../images/logo-01.png')} 
                    />
                </Row>
                <Row style={{ height: height / 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    
                    <Item floatingLabel style={{ width: 250, marginTop: 10 }}>
                        <Label style={{ color: 'white' }}>Username</Label>
                        <Input
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                            style={{ color: 'white' }} 
                            returnKeyType="next"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        </Item>
                        <Item floatingLabel style={{ width: 250, marginTop: 10 }}>
                        <Label style={{ color: 'white' }}>Password</Label>
                        <Input
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}                            
                            style={{ color: 'white' }}
                            returnKeyType="go"
                            autoCorrect={false}
                            secureTextEntry
                        />
                        </Item>
                    {this.renderButton()}
                    <Text style={styles.signup} onPress={() => this.props.navigation.navigate('SignUpForm')}>
                    Don't have an account ? SignUp Now 
                    </Text>
                </Row>
                
              </Grid>
            </Content>
          </Container>    
        );
    }
}

const styles = StyleSheet.create({
     logo: {
        width: 250,
        height: 90,
        padding: 10,
        resizeMode: 'stretch'
    },
    buslogo: {
        width: 130,
        height: 130,
        marginTop: 50
    },
    signup: {
        color: 'white'
    }
});
