import React, { Component } from 'react';
import { Container, Title, Left, Right, Header, Content, List, ListItem, Thumbnail, Text, Body, CheckBox, Icon} from 'native-base';
import {View} from 'react-native'
export default class Following extends Component {
    constructor(props){
        super(props);
        this.state = {checked:false};
    }
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
                                <Thumbnail square size={80} source={{ uri: 'http://career.oregonstate.edu/sites/career.oregonstate.edu/files/bronze_icon.jpg' }} />
                                <Body>
                                    <Text>OSU Career Development Center</Text>
                                    <Text note>Events this term (5)</Text>
                                    <Text note>Followers (4)</Text>
                                    <View style={{flexDirection: "row"}}>
                                        <CheckBox onPress={() => this.setState({checked: !this.state.checked})} checked={this.state.checked} />
                                        <Text note>  Following</Text>
                                        <Icon name= 'add' style={{position: "absolute", bottom: 0, right: 0}}/>
                                    </View>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: '' }} />
                                <Body>
                                    <Text>Dam Chic</Text>
                                    <Text note>Events this term (7)</Text>
                                    <Text note>Followers (22)</Text>
                                    <View style={{flexDirection: "row"}}>
                                        <CheckBox onPress={() => this.setState({checked: !this.state.checked})} checked={this.state.checked} />
                                        <Text note>  Following</Text>
                                        <Icon name= 'add' style={{position: "absolute", bottom: 0, right: 0}}/>
                                    </View>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://www.internetcreations.com/s/images/customers/stories/OSU-COB-logo.jpg?v=1' }} />
                                <Body>
                                    <Text>OSU College of Besiness</Text>
                                    <Text note>Events this term (20)</Text>
                                    <Text note>Followers (45)</Text>
                                    <View style={{flexDirection: "row"}}>
                                        <CheckBox onPress={() => this.setState({checked: !this.state.checked})} checked={this.state.checked} />
                                        <Text note>  Following</Text>
                                        <Icon name= 'add' style={{position: "absolute", bottom: 0, right: 0}}/>
                                    </View>
                                </Body>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
        );
    }
}
