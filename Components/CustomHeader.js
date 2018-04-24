import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import {Header} from 'react-native-elements';
import {  Body, Title, Content, Left, Icon, Right } from 'native-base'

class CustomHeader extends Component {
    render() {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress :() => this.props.drawerOpen()}}
                centerComponent={{ text: this.props.title , style: { color: '#fff' } }}
            />
        );
    }
}
export default CustomHeader;