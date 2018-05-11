import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, ImageBackground  } from 'react-native';
import {auth, database} from '../../../../../config/firebase'

export default class Header extends Component {
  render() {
    return (

      <ImageBackground style={styles.headerBackground} source={require('../ProfileTab/test_img/954001.jpg')}>

        <View style={styles.header}>

          <View style={styles.ProfilePicWrap}>

            <Image style={styles.ProfilePic} source={require('../ProfileTab/test_img/0_200.png')}></Image>

          </View>

          <Text style={styles.name}></Text>

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
    width: 150,
    height: 150,
    backgroundColor: '#FFF',
    borderWidth: 16,
  },
  ProfilePic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#FFF',
    borderWidth: 4
  },
  name: {
    marginTop: 200,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold'

  }

});