import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button } from 'native-base';
import CustomHeader from '../Components/CustomHeader';

export default class ViewNotification extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "View Notification",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../image/Man.png')}
                style={[styles.icon]}
            />

    })
    render() {
        return (
            <Container>
                <CustomHeader
                    title="View Notification"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <Text> View Fees </Text>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})