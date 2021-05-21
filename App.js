import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WebViewClass from './study/app09'
import FlexDirectionBasics from "./study/app04";
import HomeScreen from './AppModule/pages/home';
import PresonScreen from './AppModule/pages/preson';
class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedTab: '首页',
    }
  }

  render() {
    return (<SafeAreaView style={styles.container}>
      <TabNavigator tabBarStyle={{ backgroundColor: 'white' }}>
        <TabNavigator.Item
          selected={this.state.selectedTab === '首页'}
          title="首页"
          selectedTitleStyle={{ color: '#FF542A' }}
          renderIcon={() => <Icon name='home' size={28} color='gray'></Icon>}
          renderSelectedIcon={() => <Icon name='home' size={28} color='#FF542A'></Icon>}
          onPress={() => this.setState({ selectedTab: '首页' })}>
          <HomeScreen></HomeScreen>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === '分类'}
          title="分类"
          selectedTitleStyle={{ color: '#FF542A' }}
          renderIcon={() => <Icon name='dashboard' size={28} color='gray'></Icon>}
          renderSelectedIcon={() => <Icon name='dashboard' size={28} color='#FF542A'></Icon>}
          onPress={() => this.setState({ selectedTab: '分类' })}>
          <PresonScreen></PresonScreen>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === '购物车'}
          title="购物车"
          badgeText='2'
          selectedTitleStyle={{ color: '#FF542A' }}
          renderIcon={() => <Icon name='local-mall' size={28} color='gray'></Icon>}
          renderSelectedIcon={() => <Icon name='local-mall' size={28} color='#FF542A'></Icon>}
          onPress={() => this.setState({ selectedTab: '购物车' })}>
          <FlexDirectionBasics></FlexDirectionBasics>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === '会员中心'}
          title="会员中心"
          selectedTitleStyle={{ color: '#FF542A' }}
          renderIcon={() => <Icon name='person' size={28} color='gray'></Icon>}
          renderSelectedIcon={() => <Icon name='person' size={28} color='#FF542A'></Icon>}
          onPress={() => this.setState({ selectedTab: '会员中心' })}>
          <PresonScreen></PresonScreen>
        </TabNavigator.Item>
      </TabNavigator>
    </SafeAreaView >
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  tabText: {
    color: "#666666",
    fontSize: 13
  },
  selectedTabText: {
    color: "#ff8a00",
    fontSize: 13
  },
  icon: {
    width: 25,
    height: 25
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  }
});
export default App;