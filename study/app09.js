import React, { Component } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { WebView } from 'react-native-webview';

class WebViewClass extends Component {
    render() {
        return (<View style={{ flex: 1 }}>
            <WebView
                source={{ uri: 'https://www.baidu.com' }}></WebView>
        </View>)
    }

}
export default WebViewClass;