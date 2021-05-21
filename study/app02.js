import React, { Component } from 'react';
import { Text, View } from 'react-native';
const App = () => {
    return (<View style={{ marginTop: 44, padding: 10, backgroundColor: '#00FF12' }}>
        <View>
            <Text>老陈打码</Text>
        </View>
        <View style={{ marginTop: 8, padding: 8, backgroundColor: 'blue' }}>
            <Text style={{ color: 'white' }}>老陈打码</Text>
        </View>
        <View style={{ marginTop: 8, marginHorizontal: 10, padding: 8, width: 200, backgroundColor: 'red' }}>
            <Text style={{ color: 'white' }}>
                老陈打码
            </Text>
        </View>
    </View>)
}
export default App;