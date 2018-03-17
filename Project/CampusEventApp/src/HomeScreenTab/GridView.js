import React, { Component } from 'react';
import {StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image} from 'react-native';

export default class GridView extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    return fetch('http://192.168.1.77/EventsList.php')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      });
    })
    .catch((error) => {
      console.error(error);
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

            data={ this.state.dataSource }
            renderItem={({item}) =>

                    <View style={styles.GridViewBlockStyle}>
                    <View style={{flex:1, flexDirection:'column'}}>
                        <Text style={styles.GridViewTitleStyle} >{item.event_name}</Text>
                        <Text style={styles.GridViewInsideTextItemStyle} >{item.event_description}</Text>
                        </View>

                    </View>

          }

        keyExtractor={(item, index) => index}
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
      fontSize: 10,
      textAlignVertical:'center',
      fontWeight: "bold"

    }

});
