import React, { Component } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation";
import { Icon, Tabs, Tab, Button, Header, Title, Content, Footer, FooterTab, List, ListItem, Thumbnail, Text, Body } from 'native-base';

import CalendarView from "CampusEventApp/src/HomeScreenTab/CalendarView.js";
import Grid from "CampusEventApp/src/HomeScreenTab/GridView.js";
import ListView from "CampusEventApp/src/HomeScreenTab/ListView.js";

const MainEventNavigation = TabNavigator ({
  CalendarView: {
    screen: CalendarView,
    navigationOptions: ({navigation}) => ({
      tabBarIcon: <Icon ios="ios-calendar" android="md-calendar" />
    })
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
  animationEnabled: false,
  swipeEnabled: false,
  lazyLoad: false,
  scrollEnabled: true
});

/*const DrawerEvents = DrawerNavigator({
  DrawerEvents: { screen: MainEventNavigation }
},
{
  drawerWidth: 300,
  drawerPosition: "right",
  navigationOptions: ({navigation}) => ({
    title: "Menu",
    headerStyle: {
      backgroundColor: "#ffffff"
    },
    headerTitleStyle: {
      color: "000000"
    },
    headerRight:
    <SideBar
    onPress={() => {
      if(navigation.state.index === 0){
        navigation.navigate("DrawerOpen");
      }else{
        navigation.navigate("DrawerClose");
      }
    }
  }
  />
    /*headerRight:
    <TouchableOpacity
    transparent
    style = {{ paddingHorizontal: 20 }}
    onPress={() => {
      if(navigation.state.index === 0){
        navigation.navigate("DrawerOpen");
      }else{
        navigation.navigate("DrawerClose");
      }
    }}
    >
    <Icon ios='ios-menu' android="md-menu" style={{fontSize: 40, color: "white"}}/>
    </TouchableOpacity>
})
});*/



const Events = StackNavigator ({
  MainEventNavigation: {
    screen: MainEventNavigation
  }
},
{
  navigationOptions: ({navigation}) => ({
    title: "My Events",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center"
    },
    headerStyle: {
      backgroundColor: "#ff4d4d"
    }
  })
});


export default Events;
