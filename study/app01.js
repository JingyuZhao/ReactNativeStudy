import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar
} from 'react-native'
const App = () => {
    return (
        <SafeAreaView>
            <StatusBar barStyle={"dark-content"}></StatusBar>
            <View
                style={styles.view}>
                <Text>
                    Hello world!
            </Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    view: {
        height: 200,
        width: 200,
        backgroundColor: 'red'
    }
});
export default App;