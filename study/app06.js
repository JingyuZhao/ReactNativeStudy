import React from 'react';
import { View, Text, SafeAreaView } from "react-native";
class ChangeNameText extends React.Component {
    constructor(userprops) {
        super(userprops)
        this.state = { name: userprops.name, age: userprops.age }
    }

    updateStaues = () => {
        const name = this.state.name == "change" ? "老陈你咋不翻车呢？" : "老陈牛逼"
        this.setState({ name: name, age: 23 })
    }

    render() {
        return (<View>
            <SafeAreaView>
                <Text onPress={this.updateStaues}>{this.state.name}</Text>
                <Text>{this.state.age}</Text>
            </SafeAreaView>
        </View>)
    }
}
class App06 extends React.Component {
    render() {
        return (<View>
            <ChangeNameText name="change" age='24'></ChangeNameText>
        </View>)
    }
}
export default App06;