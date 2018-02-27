import React, { Component } from 'react';
import { Container, CheckBox, List, ListItem, Thumbnail, Text, Content, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {View} from 'react-native';
export default class ListView extends Component {
  constructor(props){
    super(props);
    this.state = {checked: false};
  }

  render() {
    return (
      <Container>
      <Content>
        <List>
          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
            <Body>
              <Text>Blablabla</Text>
              <Text note>Blablabla</Text>
              <View style={{ flexDirection: 'row' }}>
              <CheckBox onPress={() => this.setState({checked: !this.state.checked})} checked={this.state.checked} />
              <Text> Following</Text>
              </View>
            </Body>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
              <View style={{ flexDirection: 'row' }}>
              <CheckBox onPress={() => this.setState({checked: !this.state.checked})} checked={this.state.checked} />
              <Text> Following</Text>
              </View>
            </Body>
          </ListItem>
        </List>
      </Content>
      </Container>
    );
  }
}
