import React, { Component } from 'react';
import {StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image} from 'react-native';
import { auth, database } from '../../../../config/firebase';

export default class ListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      favorites: [],
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
    const user = auth.currentUser;
    database.ref().child('users'+ user.uid).child('followingevents').on('value', (snapshot)=> {
      const favorites = [];
      snapshot.forEach((childSnapshot) => {
        favorites.push({
          title: childSnapshot.toJSON().title,
          description: childSnapshot.toJSON().description,
          date: childSnapshot.toJSON().date,
          image: childSnapshot.toJSON().image,
          id: childSnapshot.toJSON().id,
        });
        this.setState({
          favorites: favorites,
          isLoading: false,
        });
      });
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

        data={ this.state.favorites }

        ItemSeparatorComponent = {this.FlatListItemSeparator}

        renderItem={({item}) =>

            <View style={{flex:1, flexDirection: 'row'}}>

              <Image source = {{ uri: item.image }} style={styles.imageView} />

              <View style={{flex:1, flexDirection:'column'}}>
              <Text style={styles.textTitleView} >{item.title}</Text>
              <Text style={styles.textView} >{item.description}</Text>
              <Text style={styles.textTitleView} >{item.date}</Text>
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