import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const App05 = () => {
    return (<View style={styles.container} >
        {/* set red font*/}
        <Text style={styles.txt}>
            这是红色字体
        </Text>
        {/* bold font*/}
        <Text style={styles.wordBold}>这是加粗字体</Text>
        {/* italic font*/}
        <Text style={styles.italicText}>这里是倾斜字体</Text>
        {/* shadow font*/}
        <Text style={styles.shadow}>阴影字体</Text>
    </View >)
}
const styles = StyleSheet.create({
    container: {
        marginTop: 44,
        height: 300,
        marginHorizontal: 10,
        backgroundColor: '#666333'
    },
    txt: {
        height: 30,
        color: 'red',
        fontSize: 20
    },
    wordBold: {
        fontWeight: 'bold',
        fontSize: 18,
        height: 30
    },
    shadow: {
        textShadowColor: 'green',
        textShadowOffset: { width: 2, height: 3 },
        textShadowRadius: 2,
        fontSize: 20
    },
    italicText: {
        height: 30,
        fontSize: 18,
        color: 'black',
        fontStyle: 'italic'
    }
})
export default App05;