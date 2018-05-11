import React, { Component } from 'react';
import {StyleSheet, View, StatusBar } from 'react-native';

import Header from './ProfileTab/Header.js';
import SignOut from './ProfileTab/signout/signout'
//import Navigator from './ProfileTab/Navigator';
export default class Profile extends Component {
  render() {
    return (
      <View style = {styles.container}>
      <StatusBar hidden={true} />

        <Header />
        <SignOut />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});