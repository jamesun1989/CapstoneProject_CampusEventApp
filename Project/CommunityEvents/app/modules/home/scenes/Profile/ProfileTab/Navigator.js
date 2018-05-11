import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Events from '../../ListView/ListView';
import Groups from '../ProfileTab/MyGroups/MyGroups';
//import Friends from './ProfileTabs/Friends';


const ProfileNavigation = TabNavigator ({
  MyEvents: {
    screen: Events,
    navigationOptions:{
      title: 'My Events',
      headerTitle: 'My Events',
      tabBarLabel: 'My Events',
    }
  },
  MyGroups: {
    screen: Groups,
    navigationOptions:{
      title: 'My Groups',
      headerTitle: 'My Groups',
      tabBarLabel: 'My Groups',
    }
  }
  /*Friends: {
    screen: Friends,
    navigationOptions:{
      title: 'Friends',
      headerTitle: 'Friends',
      tabBarLabel: 'Friends',
    }
  }*/
},
{
  tabBarOptions: {
    showIcon: false,
    showLabel: true,
    style: {
        backgroundColor: '#ffffff',
      },
    indicatorStyle: {
      backgroundColor: "#000000",
    },
    activeTintColor: 'tomato',
    inactiveTintColor: 'tomato'
  },
  animationEnabled: false,
  swipeEnabled: false,
  lazyLoad: false,
  scrollEnabled: true
});


export default ProfileNavigation;
