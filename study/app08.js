import { View, ScrollView, Image, SafeAreaView, ActivityIndicator, Text, Alert } from "react-native";
import React, { Component } from "react";
export default class App06 extends Component {
    state = { animation: false }

    _handleActiveIndicator = () => {
        this.setState({
            animation: !this.state.animation
        })
    }
    _showAlert = () => {
        Alert.alert('弹窗', '这是弹窗', [{ text: '确认', onPress: this._showInputAlert }, { text: '取消', style: 'cancel' }])

    }
    _showInputAlert = () => {
        Alert.prompt('Input Alert', '这是Input的弹窗', [{ text: '确认', onPress: (text) => { console.log(text) } }, { text: 'Cancle', style: 'cancel' }], 'secure-text', 'name', 'number-pad')
    }

    render() {
        return (<View>
            <SafeAreaView>
                <ScrollView >
                    <Image source={require('../assets/img_login_logo.png')} style={{ backgroundColor: 'gray', margin: 20, width: 300, height: 100, resizeMode: 'cover' }}></Image>
                    <Image source={require('../assets/Rectangle.png')}></Image>
                    <Image style={{ margin: 10, width: 177, height: 100 }} source={{ uri: 'https://www.twle.cn/static/i/img1.jpg' }}></Image>
                    <ActivityIndicator color={'red'} size={'large'} style={{ backgroundColor: 'yellow' }} animating={this.state.animation}></ActivityIndicator>
                    <Text style={{ margin: 20, backgroundColor: 'blue', color: 'white', fontSize: 16, height: 50, textAlignVertical: 'center', textAlign: 'center', includeFontPadding: false, padding: 15, }} onPress={this._handleActiveIndicator}>Hidden loading view</Text>
                    <Text style={{ margin: 20, backgroundColor: 'blue', color: 'white', fontSize: 16, height: 50, textAlignVertical: 'center', textAlign: 'center', includeFontPadding: false, padding: 15, }} onPress={this._showAlert}>显示Alert</Text>
                </ScrollView>
            </SafeAreaView>
        </View >)
    }
}