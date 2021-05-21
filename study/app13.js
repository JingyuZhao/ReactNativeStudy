import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

class App13 extends Component {
    state = { responeInfo: '' }
    getRequest = () => {
        fetch('https://www.baidu.com', { method: 'Get' })
            .then((responeData) => {
                console.log(responeData)
                this.setState({
                    responeInfo: responeData['status'] + responeData['url']
                })
            })
    }

    // 示例代码，post请求
    postRequest = () => {
        var opts = {
            method: "POST",   //请求方法
            body: { 'name': 'post' },   //请求体
            headers: {
                'Accept': 'application/html',
                'Content-Type': 'application/html',
            },
        }
        fetch('https://www.baidu.com', opts)
            .then((responeData) => {
                console.log(responeData)
                this.setState({
                    responeInfo: 'Post' + responeData['status'] + responeData['url']
                })
            }).catch((error) => {
                console.error(error);
            })
        // fetch('https://www.baidu.com', opts)
        //     .then((respone) => respone.json())
        //     .then((responeData) => {
        //         console.log(responeData)
        //     }).catch((error) => {
        //         console.error(error);
        //     })
    }

    render() {
        return (<View>
            <SafeAreaView >
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.getRequest} style={styles.button}>
                        <Text>Get 请求</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.postRequest} style={styles.button}>
                        <Text>Post 请求</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ backgroundColor: 'red', color: 'green', marginHorizontal: 20, height: 300 }}>请求内容：{this.state.responeInfo}</Text>
            </SafeAreaView>
        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        height: 40,
        margin: 20
    },
    button: {
        width: 100,
        height: 30,
    }
})
export default App13;