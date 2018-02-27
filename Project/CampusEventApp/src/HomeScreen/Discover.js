import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Header, Title, Left, Right, Body, StyleProvider } from 'native-base';
import { StackNavigator } from 'react-navigation';
//import { getStatusBarHeight } from 'react-native-status-bar-height';
import SportsScreen from 'CampusEventApp/src/DiscoverScreen/Sports.js';

class Discover extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
      <Content>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{navigate('Sports');}}>
          <Image source={require("CampusEventApp/img/FollowingScreen/sports.jpg")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("CampusEventApp/img/FollowingScreen/volunteers.jpg")}/>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("CampusEventApp/img/FollowingScreen/sports.jpg")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("CampusEventApp/img/FollowingScreen/volunteers.jpg")}/>
        </TouchableOpacity>
      </View>
      </Content>
      </Container>
    );
  }
}

const DiscoverScreen = StackNavigator({
  DiscoverScn: { screen: Discover,
  navigationOptions:({navigation})=>({
    title: 'Discover',
    headerTitleStyle:{
      textAlign: 'center',
      alignSelf: 'center'
    },
    headerStyle: {
      backgroundColor: "#ff4d4d"
    }
  })},
  Sports: { screen: SportsScreen,
    navigationOptions:({navigation})=>({
      title: 'Discover',
      headerTitleStyle:{
        textAlign: 'center',
        alignSelf: 'center'
      },
      headerStyle: {
        backgroundColor: "#ff4d4d"
      }
    })}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});

export default DiscoverScreen;
