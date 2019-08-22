import React, { Component } from 'react';
import { createStackNavigator,createSwitchNavigator } from 'react-navigation';

import Home from '../src/screens/Home'
import Create from '../src/screens/Create'
import Show from '../src/screens/Show'
import Detail from '../src/screens/Detail'
import Log from '../src/screens/Log'
import Bowl from '../src/screens/Bowl'

const HomeStack = createStackNavigator(
    {
        Home: Home,
        Create: Create,
        Show: Show,
        Detail: Detail,
        Log:Log ,
        Bowl:Bowl ,
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
        // Log:Log
        Home: HomeStack,
        // Create: Create,
    
    }
)

