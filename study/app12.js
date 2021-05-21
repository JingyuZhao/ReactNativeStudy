import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

class App12 extends Component {
    users = [
        { label: '请选择性别', value: '' },
        { label: '男', value: 'male' },
        { label: '女', value: 'female' },
        { label: '其他', value: 'other' }];

    state = { user: '' }

    updateUser = (userinfo) => {
        console.log(userinfo)
        this.setState({ user: userinfo })
    }

    render() {
        return (<View style={styles.container}>
            <Picker style={styles.picker} selectedValue={this.state.user} onValueChange={this.updateUser}>
                {
                    this.users.map((o, index) =>
                        <Picker.Item label={o.label} value={o.value}></Picker.Item>)
                }
            </Picker>
            <Text style={styles.label}>你的选择是</Text>
            <Text style={styles.text}>{this.state.user}</Text>
        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    picker: {

    },
    label: {
        fontSize: 12,
        color: '#333333'
    },
    text: {
        fontSize: 30,
        color: 'red'
    }
});
export default App12;