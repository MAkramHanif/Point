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

import SettingsScreen from './SettingScreen';
import HomeScreen from './HomeScreen';
import ChangeLocation from './ChangeLocation';
import ViewInfo from './ViewInfo';
import ViewFees from './View Fee';
import RegisterPoint from './RegisterPoint';
import ViewNotification from './ViewNotification';
import Complain from './Complain';


export default class Home extends Component{
  static navigationOptions = ({ navigation }) => ({
    header: null
  })
  render(){
    return(
      <MyApp />
    );
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('../image/Man.png')} />
      </Body>
    </Header>
    <Header style={styles.drawerText}>
      <Body>
        <Text> Muhammad Akram </Text>
        <Text note> k152270@nu.edu.pk </Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
      <Button title="Logout" />
    </Content>
  </Container>
);

const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: HomeScreen,
  },
  ChangeLocation :{
    screen : ChangeLocation
  },
  ViewInfo:{
    screen : ViewInfo
  },
  ViewFees:{
    screen : ViewFees
  },
  RegisterPoint:{
    screen : RegisterPoint
  },
  ViewNotification:{
    screen : ViewNotification
  },
  Complain:{
    screen : Complain
  },
  Settings: {
    screen: SettingsScreen
  },
  
},
{ 
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 100,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 0
  },
  drawerText: {
    height: 50,
    backgroundColor: 'white'
  }
});
