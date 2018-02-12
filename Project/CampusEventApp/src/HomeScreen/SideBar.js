import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List>

          <ListItem
            button
            onPress={() => this.props.navigation.navigate("Events")}>
            <Text>Home</Text>
          </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
