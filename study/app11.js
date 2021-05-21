import React, { Component } from 'react'
import { View, Animated, StyleSheet, TouchableOpacity } from "react-native"

class App11 extends Component {
    UNSAFE_componentWillMount = () => {
        this.animationWidth = new Animated.Value(50)
        this.animationHeight = new Animated.Value(100)
    }

    animationBox = () => {
        Animated.timing(this.animationWidth, {
            toValue: 200,
            duration: 100,
            useNativeDriver: false
        }).start()

        Animated.timing(this.animationHeight, {
            toValue: 500,
            duration: 500,
            useNativeDriver: false
        }).start()
    }

    render() {
        const animatedStyle = {
            width: this.animationWidth,
            height: this.animationHeight
        }
        return (<TouchableOpacity style={styles.container} onPress={this.animationBox}>
            <Animated.View style={[styles.box, animatedStyle]}></Animated.View>
        </TouchableOpacity>)
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: "center",
        flex: 1
    },
    box: {
        backgroundColor: 'blue',
    }
})
export default App11;