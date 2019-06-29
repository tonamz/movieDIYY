import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppNav } from './route'
import { createAppContainer,StackNavigator } from 'react-navigation'

const AppContainer = createAppContainer(AppNav)

export default class App extends Component{
  render() {
    return (
      (<AppContainer />)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
