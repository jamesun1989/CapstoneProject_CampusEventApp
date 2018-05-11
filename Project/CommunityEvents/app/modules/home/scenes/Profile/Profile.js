import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, StatusBar, Alert } from 'react-native';
import {Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import { actions as auth, theme } from "../../index"
const { signOut } = auth;

const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;


//import Header from './ProfileTab/Header.js';
//import SignOut from './ProfileTab/signout/signout'
//import Navigator from './ProfileTab/Navigator';
export default class Profile extends Component {
  constructor(){
    super();
    this.state = { }
    
    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut() {
      this.props.signOut(this.onSuccess.bind(this), this.onError.bind(this))
  }

  onSuccess() {
      Actions.reset("Auth")
  }

  onError(error) {
      Alert.alert('Oops!', error.message);
  }
  render() {
    return (
      <View style = {styles.container}>
        <StatusBar hidden={true} />
          <ImageBackground style={styles.headerBackground} source={require('./ProfileTab/test_img/954001.jpg')}>
            <View style={styles.header}>
              <View style={styles.ProfilePicWrap}>
                <Image style={styles.ProfilePic} source={require('./ProfileTab/test_img/0_200.png')}></Image>
              </View>
              <Text style={styles.name}>name</Text>
            </View>
          </ImageBackground>

          <View style={styles.signoutCon}>
            <Button
              
              borderRadius={4}
              title={'LOG OUT'}
              containerViewStyle={[styles.containerView]}
              buttonStyle={[styles.button]}
              textStyle={styles.buttonText}
              onPress={this.onSignOut}/>
          </View>
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
  },
  signoutCon:{
    flex:1
    },

    bottomContainer:{
        backgroundColor:"white",
        paddingVertical: padding * 3,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

    buttonContainer:{
        width: '60%', 
        height: 50, 
        backgroundColor: '#FF9800', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    }
});