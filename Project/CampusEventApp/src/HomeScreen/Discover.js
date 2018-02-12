import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Header, Title, Left, Right, Body, StyleProvider } from 'native-base';
//import { getStatusBarHeight } from 'react-native-status-bar-height';

import getTheme from 'CampusEventApp/native-base-theme/components';
import material from 'CampusEventApp/native-base-theme/variables/material';

export default class Discover extends React.Component {
  render() {
    return (
      //<StyleProvider style={getTheme(material)}>
      <Container>
      <Header style={{backgroundColor:"#ff4d4d"}}>
      <Left style={{ flex: 1}} />
      <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Title>Discover</Title>
      </Body>
      <Right style={{ flex: 1}}/>
      </Header>
      <Content>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
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
      //</StyleProvider>
    );
  }
}

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
