import React, { Component } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import {Icon} from 'native-base';

export default class SideBar extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity
      transparent
      style = {{ paddingHorizontal: 20 }}
      onPress={() => onPress() }
      >
      <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: "#ffffff"}}/>
      </TouchableOpacity>
    );
  }
}
