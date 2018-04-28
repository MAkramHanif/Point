import React, { Component } from 'react';
import {
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 25.0700;
const LONGITUDE = 67.2848;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyDKcVLOnoPqdMp5nu7gcK6HQ4TTgZqsVRM';

export default class Map extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
      coordinates: [{
          latitude: 24.875596,
          longitude: 67.020723,
        },
        {
          latitude: 24.879739, 
          longitude: 67.023423,
        },
        {
          latitude: 24.885273, 
          longitude: 67.030200,
        },
        
      ],
        region: {
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
    };
    this.mapView = null;
  }
  render() {
    return (
          <MapView
            provider="google"
            showsUserLocation
            showsMyLocationButton
            showsCompass
            followsUserLocation
            loadingEnabled
            toolbarEnabled
            zoomEnabled
            rotateEnabled
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,				
            }}
            style={{ flex: 1 }}
            ref={c => this.mapView = c}
            onPress={this.onMapPress}
          >
            <MapView.Marker
              coordinate={this.state.coordinates[0]}
            />
            <MapView.Marker
              coordinate={this.state.coordinates[this.state.coordinates.length - 1]}
            />
            <MapViewDirections
              origin={this.state.coordinates[0]}
              waypoints={(this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1) : null}
              destination={this.state.coordinates[this.state.coordinates.length - 1]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={4}
              strokeColor="hotpink"
            />
          </MapView>
    );
  }
}

