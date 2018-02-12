import React, { Component } from 'react';
import { Container, Title, Left, Right, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
export default class Following extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"#ff4d4d"}}>
        <Left style={{ flex: 1}} />
        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Title>Following</Title>
        </Body>
        <Right style={{ flex: 1}} />
        </Header>
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
