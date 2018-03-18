import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { StackNavigator,  } from 'react-navigation'
import { Container, Content} from 'native-base';

import Events from '../ProfileTab/ProfileTabs/Events';
import Groups from '../ProfileTab/ProfileTabs/Groups';
import Friends from '../ProfileTab/ProfileTabs/Friends';

import Navigator from '../ProfileTab/Navigator';


class Profile extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <View style={styles.header}>
            <View style={styles.backgroundContainer}>
              <Image source = {require('../ProfileTab/test_img/954001.jpg')} resizeMode = 'cover' style = {styles.backdrop} />
            </View>
            <View style={styles.ProfilePicWrap}>
              <Image style={styles.ProfilePic} source={require('../ProfileTab/test_img/0_200.png')}></Image>
            </View>
          </View>

          <Navigator />

        </Content>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({

  header: {
    flex: 1,
    alignItems: 'center'
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  ProfilePicWrap:{
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#FFF',
    borderWidth: 16,
  },
  ProfilePic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 85,
    borderColor: '#FFF',
    borderWidth: 4
  },

});
const ProfilePage = StackNavigator ({
  Profile: {
    screen: Profile
  }
},
{
  navigationOptions: ({navigation}) => ({
    title: "Profile",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center"
    },
    headerStyle: {
      backgroundColor: "#ff4d4d"
    }
  })
});

export default ProfilePage;