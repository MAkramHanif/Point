import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button } from 'native-base';
import CustomHeader from '../Components/CustomHeader';

export default class Complain extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Complain",
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
                    title="Complain"
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