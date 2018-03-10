import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Events from './ProfileTabs/Events';
import Groups from './ProfileTabs/Groups';
import Friends from './ProfileTabs/Friends';

var friendNum = 12;
var groupNum = 2;
var eventNum = 4;


const ProfileNavigation = TabNavigator ({
  MyEvents: {
    screen: Events,
    navigationOptions: {title: 'My Events'}
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

const Navigator = StackNavigator ({
  ProfileNavigation: {
    screen: ProfileNavigation
  }
});

export default Navigator;
