import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    SafeAreaView
} from 'react-native';
import { WebView } from 'react-native-webview';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
const HomeStackNavigator = createStackNavigator();
class HomeScreen extends Component {
    render() {
        return (
            <NavigationContainer>
                <HomeStackNavigator.Navigator>
                    <HomeStackNavigator.Screen name='首页' component={HomePage}></HomeStackNavigator.Screen>
                </HomeStackNavigator.Navigator>
            </NavigationContainer >
        )
    }
}
export default HomeScreen;
class HomePage extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <WebView
                    source={{ uri: 'https://www.baidu.com' }}
                ></WebView>
            </SafeAreaView>)
    }
}