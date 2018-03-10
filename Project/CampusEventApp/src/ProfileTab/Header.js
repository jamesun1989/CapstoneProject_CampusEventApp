import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, ImageBackground  } from 'react-native';

export default class Header extends Component {
  render() {
    return (

      <ImageBackground style={styles.headerBackground} source={require('../ProfileTab/test_img/954001.jpg')}>

        <View style={styles.header}>

          <View style={styles.ProfilePicWrap}>

            <Image style={styles.ProfilePic} source={require('../ProfileTab/test_img/OK_thumb.jpg')}></Image>

          </View>

          <Text style={styles.name}>One Punch</Text>

        </View>
      
      </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({

  headerBackground:{
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'#FFFFFF'
  },

  ProfilePicWrap:{
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: '#000000',
    borderWidth: 16,
  },
  ProfilePic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#000000',
    borderWidth: 4
  },
  name: {
    marginTop: 200,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold'

  }

});