import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View, AppRegistry } from 'react-native';
export default class StorageClass extends Component {
    state = {
        'name': 'StorageClass Demo',
        'inputText': 'This is inputText！'
    }

    async readName() {
        try {
            const value = await AsyncStorage.getItem('name')
            if (value !== null) {
                this.setState({ 'name': value })
            }
            Alert.alert('读取数据成功！')
        } catch (e) {
            console.log(e)
            Alert.alert('读取数据失败')
        }
    }

    setName = () => {
        AsyncStorage.setItem('name', this.state.inputText)
        Alert.alert('Save Successful!')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput} autoCapitalize='none' onChangeText={(txt) => { this.state.inputText = txt }}></TextInput>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableHighlight style={[styles.button, { marginRight: 8 }]} onPress={this.setName}>
                        <Text style={styles.buttonText}>保存</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[styles.button, { backgroundColor: 'blue' }]}
                        onPress={this.readName.bind(this)}>
                        <Text style={styles.buttonText}>读取</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ marginTop: 8 }}>
                    <Text style={{ margin: 20 }}>当前的name值：{this.state.name}</Text>
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        marginTop: 44,
        height: 300
    },
    textInput: {
        margin: 20,
        height: 40,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 8
    },
    button: {
        flex: 1,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        backgroundColor: 'red',
        margin: 20
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        justifyContent: 'center'
    }
})