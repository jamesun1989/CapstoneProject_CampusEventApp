import React, { Component } from 'react';
import {StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image} from 'react-native';
import {CheckBox} from 'native-base';
export default class ListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
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

  webCall=()=>{
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

  componentDidMount(){
    this.webCall();
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

        data={ this.state.dataSource }

        ItemSeparatorComponent = {this.FlatListItemSeparator}

        renderItem={({item}) =>

            <View style={{flex:1, flexDirection: 'row'}}>

              <Image source = {{ uri: item.event_image }} style={styles.imageView} />

              <View style={{flex:1, flexDirection:'column'}}>
              <Text style={styles.textTitleView} >{item.event_name}</Text>
              <Text style={styles.textView} >{item.event_description}</Text>
              <Text style={styles.textTitleView} >{item.event_day} {item.event_month} {item.event_year}</Text>
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

    width: '20%',
    height: 80 ,
    margin: 10,
    borderRadius : 100

},

textView: {

    width:'70%',
    textAlignVertical:'center',
    padding:10,
    color: '#000'

},
textTitleView: {

    width:'70%',
    textAlignVertical:'center',
    padding:10,
    color: '#000',
    fontWeight: "bold"

}

});
