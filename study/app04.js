import React, { Component } from 'react';
import { View } from "react-native";
export default class FlexDirectionBasics extends Component {
    render() {
        return (
            <View style={{ margin: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ height: 100, width: 100, backgroundColor: 'powderblue' }}></View>
                <View style={{ width: 100, height: 100, backgroundColor: "blue" }}></View>
                <View style={{ width: 100, height: 100, backgroundColor: "green" }}></View>
            </View>
        )
    }
}