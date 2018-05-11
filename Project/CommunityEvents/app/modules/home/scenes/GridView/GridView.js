import React, { Component } from 'react';
import { Alert, TouchableOpacity, StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image} from 'react-native';
import { auth, database } from '../../../../config/firebase';

export default class GridView extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      favorites: [],
    }
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

      <View style={styles.ActivityIndicator_Style}>

         <ActivityIndicator size="large" />

       </View>

     );

   }
    return (
      <View style={styles.MainContainer}>

        <FlatList

            data={ this.state.favorites }
            renderItem={({item}) =>

                    <View style={styles.GridViewBlockStyle}>
                    <View style={{flex:1, flexDirection:'column'}}>
                    <TouchableOpacity onPress={()=>Alert.alert(item.title, item.description)} style={{ flex: 1 }}>
                        <Text style={styles.GridViewTitleStyle} >{item.title}</Text>
                    </TouchableOpacity>    
                    </View>

                    </View>

          }

        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        />

     </View>
    );
  }
}

const styles = StyleSheet.create({

MainContainer :{

justifyContent: 'center',
flex:1,
margin: 10,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,

},

ActivityIndicator_Style:{

    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
},

GridViewBlockStyle: {

    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 100,
    margin: 5,
    backgroundColor: '#fff'

  }
  ,

  GridViewInsideTextItemStyle: {

     color: '#000',
     padding: 10,
     fontSize: 10,
     textAlignVertical:'center'

   },

   GridViewTitleStyle: {

      color: '#000',
      padding: 10,
      fontSize: 20,
      textAlignVertical:'center',
      fontWeight: "bold"

    }

});