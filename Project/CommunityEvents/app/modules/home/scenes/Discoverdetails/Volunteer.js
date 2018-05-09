import React, { Component } from 'react';
import {StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image} from 'react-native';
import {CheckBox, Header, Left, Right, Title, Body, Container } from 'native-base';
import { database } from '../../../../config/firebase';

export default class ListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      volunteers: [],
      isLoading: false,
      checked: false
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
    database.ref().child('events/1/eventdetails').on('value', (snapshot)=> {
      const volunteers = [];
      snapshot.forEach((childSnapshot) => {
        volunteers.push({
          title: childSnapshot.toJSON().title,
          description: childSnapshot.toJSON().description,
          date: childSnapshot.toJSON().date,
          image: childSnapshot.toJSON().image,
        });
        this.setState({
          volunteers: volunteers,
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

        data={ this.state.volunteers }

        ItemSeparatorComponent = {this.FlatListItemSeparator}

        renderItem={({item}) =>

            <View style={{flex:1, flexDirection: 'row'}}>

              <Image source = {{ uri: item.image }} style={styles.imageView} />

              <View style={{flex:1, flexDirection:'column'}}>
              <Text style={styles.textTitleView} >{item.title}</Text>
              <Text style={styles.textView} >{item.description}</Text>
              <Text style={styles.textTitleView} >{item.date}</Text>
              <View style={{flexDirection: 'row' }}>
              <CheckBox onPress={() => this.setState({checked: !this.state.checked})} checked={this.state.checked} />
              <Text style={styles.textView}> Following</Text>
              </View>
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
