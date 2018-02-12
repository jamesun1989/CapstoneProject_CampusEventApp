import React, { Component } from "react";
import { StatusBar } from "react-native";
import { StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation";
import { Icon, Tabs, Tab, Button, Header, Title, Content, Footer, FooterTab, List, ListItem, Thumbnail, Text, Body } from 'native-base';

import CalendarView from "CampusEventApp/src/HomeScreenTab/CalendarView.js";
import Grid from "CampusEventApp/src/HomeScreenTab/GridView.js";
import ListView from "CampusEventApp/src/HomeScreenTab/ListView.js";
import SideBar from "./SideBar.js"

const MainEventNavigation = TabNavigator ({
  CalendarView: {
    screen: CalendarView,
    navigationOptions: {
      tabBarIcon: <Icon ios="ios-calendar" android="md-calendar" />
    }
  },
  GridView: {
    screen: Grid,
    navigationOptions: {
      tabBarIcon: <Icon ios="ios-grid" android="md-grid" />
    }
  },
  ListView: {
    screen: ListView,
    navigationOptions: {
      tabBarIcon: <Icon ios="ios-list" android="md-list" />
    }
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
  animationEnabled: true,
  swipeEnabled: true,
});



const StackEvents = StackNavigator ({
  StackEvents: {
    screen: MainEventNavigation
  }
},
{
  navigationOptions: {
    title: "My Events",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center"
    },
    headerStyle: {
      backgroundColor: "#ff4d4d"
    },
    headerRight:
      <Button
      transparent
      onPress={() => this.props.navigation.navigate("DrawerOpen")}
      >
      <Icon ios='ios-menu' android="md-menu" style={{fontSize: 40, color: "white"}}/>
      </Button>
  }
});

const Events = DrawerNavigator({
  Events: {
    screen: StackEvents
  }
},
{
  contentComponent: props => <SideBar {...props} />,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});


export default Events;
