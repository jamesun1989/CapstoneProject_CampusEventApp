import React, { Component } from "react";
import Events from "./Events.js";
import Discover from "./Discover.js";
import Following from "./Following.js"
import Profile from "./profile.js"
//import NineChat from "./NineChat.js";
import getTheme from 'CampusEventApp/native-base-theme/components';
import material from 'CampusEventApp/native-base-theme/variables/material';
import { TabNavigator, DrawerNavigator } from "react-navigation";
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label,
  StyleProvider
} from "native-base";
const HomeScreen = TabNavigator(
  {
    Events: { screen: Events },
    Discover: { screen: Discover },
    Following: { screen: Following },
    Profile: { screen: Profile}
    },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <StyleProvider style={getTheme(material)}>
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Events")}
            >
              <Icon name="globe" />
              <Text>Events</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Discover")}
            >
              <Icon ios="ios-paper" android="md-paper" />
              <Text>Discover</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Following")}
            >
              <Icon ios="ios-add-circle" android="md-add-circle" />
              <Text>Follow</Text>
            </Button>
             <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Profile")}
            >
              <Icon ios="ios-person" android="md-person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
        </StyleProvider>
      );
    }
  }
);

export default HomeScreen;
