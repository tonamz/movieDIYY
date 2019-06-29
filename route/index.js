import React, { Component } from 'react';
import { createStackNavigator,createSwitchNavigator } from 'react-navigation';

import Home from '../src/screens/Home'
import Create from '../src/screens/Create'


const HomeStack = createStackNavigator(
    {
        Home: Home,
        Create: Create,
    },
    {
        //Design for navbar
        defaultNavigationOptions: {
            // headerStyle: {
            //     borderBottomWidth: 0,
            //     backgroundColor: 'transparent',
            // },
            // headerTintColor: '#F37335',
            // headerTitleStyle: {
            //     fontSize: 28,
            // },
            
        }
    }
)
HomeStack.navigationOptions = ({navigation}) => {
    let {routeName} = navigation.state.routes[navigation.state.index]
    let navigationOptions = {
        tabBarVisible: false,
    }
    if (routeName === 'Home') {
        navigationOptions.tabBarVisible = true
    }
    return navigationOptions
}

export const AppNav = createSwitchNavigator (
    {
        Home: HomeStack,
    }
)

