import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';

import Header from '../ProfileTab/Header.js';
import Navigator from '../ProfileTab/Navigator.js';
export default class Profile extends Component {
  render() {
    return (
      <View style = {styles.container}>

        <Header />
        <Navigator />


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