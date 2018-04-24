import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base';
//import { Header } from 'react-native-elements';
import CustomHeader from '../Components/CustomHeader';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 25.0700;
const LONGITUDE =  67.2848;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyDKcVLOnoPqdMp5nu7gcK6HQ4TTgZqsVRM';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      coordinates: [{
          latitude:  24.875596,
          longitude: 67.020723,
        },
        {
          latitude: 24.879739, 
          longitude:  67.023423,
        },
        {
          latitude: 24.885273, 
          longitude:  67.030200,
        },
        
      ],
    };
    this.mapView = null;
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Home",
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
          <MapView
            provider="google"
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            followsUserLocation={true}
            loadingEnabled={true}
            toolbarEnabled={true}
            zoomEnabled={true}
            rotateEnabled={true}
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,				
            }}
            style={{flex: 1}}
            ref={c => this.mapView = c}
            onPress={this.onMapPress}
          >
            <MapView.Marker
              coordinate={this.state.coordinates[0]}
            />
            <MapView.Marker
              coordinate={this.state.coordinates[this.state.coordinates.length-1]}
            />
            <MapViewDirections
              origin={this.state.coordinates[0]}
              waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
              destination={this.state.coordinates[this.state.coordinates.length-1]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={4}
              strokeColor="hotpink"
            />
          </MapView>            
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
});