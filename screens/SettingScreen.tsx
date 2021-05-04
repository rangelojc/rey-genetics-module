import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import GlobalStyles from "../styles/GlobalStyles";
export default class SettingScreen extends Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.title}>Setting</Text>
      </View>
    );
  }
}