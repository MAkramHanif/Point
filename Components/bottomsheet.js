import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  Animated,
  StatusBar,
  Dimensions,
  StyleSheet,
} from 'react-native'


//import PropTypes from 'prop-types'


import Icon from 'react-native-vector-icons/Ionicons'


import {
  BottomSheetBehavior,
  CoordinatorLayout,
} from 'react-native-bottom-sheet-behavior'




const { width } = Dimensions.get('window')

class SimpleView extends Component {
  static contextTypes = {
    openDrawer: PropTypes.get,
  };

  state = {
    scrollY: new Animated.Value(0),
  };

  handleSlide = (e) => {
    Animated.event(
      [{ nativeEvent: { offset: this.state.scrollY }}, { useNativeDriver: true }]
    )(e, this.state)
  }

  render() {
    const opacity = this.state.scrollY.interpolate({
      inputRange:  [0, 1],
      outputRange: [0, 0.65],
    })
    return (
      <CoordinatorLayout style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.2)" />
        <View style={styles.content}>
          <View style={styles.toolbarWrapper}>
            <Icon.ToolbarAndroid
              navIconName={'md-menu'}
              style={styles.toolbar}
              titleColor="white"
              title="Simple Bottom Sheet"
              onIconClicked={() => this.context.openDrawer()}
            />
          </View>
        </View>
        <Animated.View style={[styles.overlay, {opacity}]} />
        <BottomSheetBehavior
          peekHeight={80}
          hideable={false}
          onSlide={this.handleSlide}>
          <View style={styles.bottomSheet}>
            <View style={styles.bottomSheetHeader}>
              <Text style={styles.label}>BottomSheetBehavior !</Text>
            </View>
            <View style={styles.bottomSheetContent}>
            </View>
          </View>
        </BottomSheetBehavior>
      </CoordinatorLayout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  overlay: {
    position: 'absolute',
    top: -24,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    backgroundColor: 'black',
  },
  toolbarWrapper: {
    paddingTop: 24,
    marginBottom: 24,
    backgroundColor: '#4389f2',
  },
  toolbar: {
    width,
    height: 56,
  },
  bottomSheet: {
    backgroundColor: '#4389f2',
  },
  bottomSheetHeader: {
    padding: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomSheetContent: {
    height: 200,
    padding: 2,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
})

export default SimpleView