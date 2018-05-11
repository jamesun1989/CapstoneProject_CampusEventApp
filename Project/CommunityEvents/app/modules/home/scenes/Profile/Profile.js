import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, StatusBar } from 'react-native';

import Navigator from './ProfileTab/Navigator';
import SignOut from './ProfileTab/signout/signout'
export default class Profile extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <StatusBar hidden={true} />
        <Image style={styles.headerBackground} source={require('./ProfileTab/test_img/954001.jpg')}></Image>
        <View style={styles.ProfilePicWrap}>
          <Image style={styles.ProfilePic} source={require('./ProfileTab/test_img/0_200.png')}></Image>
        </View>
        <Navigator />
        <SignOut />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  headerBackground:{
    flex: 1,
    position: 'relative',
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
  ProfilePicWrap:{
    width: 125,
    height: 125,
    top: 30,
    position: 'absolute',
    backgroundColor: '#FFF',
    borderWidth: 16,
    alignSelf: 'center'
  },
  ProfilePic: {
    flex: 1,
    width: null,
    borderColor: '#FFF',
    borderWidth: 2
  }
});