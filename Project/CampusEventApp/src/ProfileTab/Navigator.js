import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';


import Events from '../HomeScreenTab/ListView';
import Groups from './ProfileTabs/Groups';
import Friends from './ProfileTabs/Friends';

const ProfileNavigation = TabNavigator ({
  MyEvents: {
    screen: Events,
    navigationOptions: {title: 'My Groups'}

  },
  MyGroups: {
    screen: Groups,
    navigationOptions: {title: 'My Groups'}

  },
  Friends: {
    screen: Friends,
    navigationOptions: {title: 'Friends'}
    }
  },
{
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    style: {
        backgroundColor: '#ffffff',
      },
    indicatorStyle: {
      backgroundColor: "#000000",
    },
    activeTintColor: 'tomato',
  },
  animationEnabled: false,
  swipeEnabled: false,
  lazyLoad: false,
  scrollEnabled: true
});
 export default ProfileNavigation;