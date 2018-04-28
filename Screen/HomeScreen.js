import React, { Component } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';

//library imports
import { Icon, Container } from 'native-base';
import Map from './Map';
import CustomHeader from '../Components/CustomHeader';
export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../image/Man.png')}
        style={styles.icon}
      />
    ),
  })

  render() {
    return (
      <Container>
        <CustomHeader title="Home" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
      <Map />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
});
