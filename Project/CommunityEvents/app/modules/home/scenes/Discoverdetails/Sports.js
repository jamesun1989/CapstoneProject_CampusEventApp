import React, { Component } from 'react';
import {StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image} from 'react-native';
import {CheckBox, Header, Left, Right, Title, Body, Container } from 'native-base';
import { auth, database } from '../../../../config/firebase';
import Spacer from '../Discover/Spacer';
import { Button } from 'react-native-elements';

export default class ListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      sports: [],
      isLoading: false,
      inFavourites: false,
    }
  }

  FlatListItemSeparator = () => {
   return (
     <View
       style={{
         height: 0.7,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }

  componentDidMount(){
    database.ref().child('events/0/eventdetails').on('value', (snapshot)=> {
      const sports = [];
      snapshot.forEach((childSnapshot) => {
        sports.push({
          title: childSnapshot.toJSON().title,
          description: childSnapshot.toJSON().description,
          date: childSnapshot.toJSON().date,
          image: childSnapshot.toJSON().image,
          id: childSnapshot.toJSON().id,
        });
        this.setState({
          sports: sports,
          isLoading: false,
        });
      });
    });
  }

  getfavoriteEvents(id, title, description, date, image) {
    const user = auth.currentUser;
    database.ref('users' + user.uid).child('followingevents').push().set({
      id: id,
      title: title,
      description: description,
      date: date,
      image: image
    });
    this.setState({
      inFavourites: true,
      isLoading: false,
    });
}

  deletefavoriteEvents(title){
    const user = auth.currentUser;
    database.ref('users' + user.uid).child('followingevents').orderByChild('title').equalTo(title)
    .once('value', (snapshot)=>{
      snapshot.forEach((childSnapshot)=>{
        childSnapshot.ref.remove();
      });
    });
    this.setState({
      inFavourites: false,
      isLoading: false,
    });
  }

  render() {
    if (this.state.isLoading) {
     return (

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

         <ActivityIndicator size="large" />

       </View>

     );

   }
    return (
    

      <View style={styles.MainContainer}>

       <FlatList

        data={ this.state.sports }

        ItemSeparatorComponent = {this.FlatListItemSeparator}

        renderItem={({item}) =>

            <View style={{flex:1, flexDirection: 'row'}}>

              <Image source = {{ uri: item.image }} style={styles.imageView} />

              <View style={{flex:1, flexDirection:'column'}}>
              <Text style={styles.textTitleView} >{item.title}</Text>
              <Text style={styles.textView} >{item.description}</Text>
              <Text style={styles.textTitleView} >{item.date}</Text>
              <Button buttonStyle={{backgroundColor: '#ff4d4d', width: 100, height:30}} title={ this.state.inFavourites ? "UNFOLLOW" : "FOLLOW"}  onPress={() => this.getfavoriteEvents(item.id, item.title, item.description, item.date, item.image)}/>
              <Spacer size={15} />
              </View>
            </View>

          }

        keyExtractor={(item, index) => index.toString()}

        />

     </View>
    );
  }
}

const styles = StyleSheet.create({

MainContainer :{

    justifyContent: 'center',
    flex:1,
    margin: 5,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,

},

imageView: {

    width: '30%',
    height: 120,
    margin: 10,
    borderRadius : 100

},

textView: {

    width:'100%',
    textAlign:'auto',
    padding:10,
    color: '#000'

},
textTitleView: {

    width:'100%',
    textAlign:'auto',
    padding:10,
    color: '#000',
    fontWeight: "bold"

}

});
