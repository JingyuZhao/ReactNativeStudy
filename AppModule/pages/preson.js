import React, { Component } from "react";
import { Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import WebViewClass from '../../study/app09'
const PersonStackNavigator = createStackNavigator();
class PresonScreen extends Component {
    render() {
        return (
            <NavigationContainer>
                <PersonStackNavigator.Navigator>
                    <PersonStackNavigator.Screen name='个人中心' component={WebViewClass}></PersonStackNavigator.Screen>
                </PersonStackNavigator.Navigator>
            </NavigationContainer>
        )
    }
}
export default PresonScreen;