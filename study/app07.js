import React, { Component } from "react"
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
class InputClass extends Component {
    state = {
        email: '',
        password: '',
        intro: ''
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (password) => {
        this.setState({ password: password })
    }

    handleIntro = (text) => {
        this.setState({ intro: text })
    }

    reigister = (email, password, intro) => {
        alert('email:' + email + '\n' + 'password:' + password + '\n' + 'intro:' + intro)
    }

    render() {
        return (<View>
            <SafeAreaView>
                <View style={styles.container}>
                    <TextInput style={styles.inputStyle} underlineColorAndroid='transparent'
                        placeholder='Please input email'
                        autoCapitalize='none'
                        placeholderTextColor='gray'
                        keyboardType='email-address'
                        returnKeyType='next'
                        clearButtonMode={'always'}
                        onChangeText={this.handleEmail}>
                    </TextInput>
                    <TextInput style={styles.inputStyle}
                        placeholder='Please input you password'
                        autoCapitalize='none'
                        placeholderTextColor='gray'
                        keyboardType='default'
                        returnKeyType='next'
                        secureTextEntry={true}
                        onChangeText={this.handlePassword}>
                    </TextInput>
                    <TextInput style={styles.inputStyle}
                        placeholder='Please input you description'
                        autoCapitalize='none'
                        placeholderTextColor='gray'
                        keyboardType='default'
                        returnKeyType='next'
                        multiline={true}
                        numberOfLines='4'
                        textAlignVertical='top'
                        onChangeText={this.handleIntro}>
                    </TextInput>
                    <TouchableOpacity style={styles.submitButton} onPress={
                        () => this.reigister(this.state.email, this.state.password, this.state.intro)
                    }>
                        <Text style={styles.submitButtonText}>Registe</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View >)
    }
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#666808',
        height: 400
    },
    inputStyle: {
        height: 44,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 5,
        margin: 5
    },
    submitButton: {
        height: 44,
        marginHorizontal: 20,
        backgroundColor: 'red',
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
    },
    submitButtonText: {
        fontSize: 20,
        color: 'white'
    }
})
export default InputClass;