import React, { Component } from 'react';

import { Text, View } from 'react-native';

import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";
export default class QuizScreen extends Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <View style={GlobalStyles.mainContainer}>
        <Header title="Activities" />

        <View style={GlobalStyles.container}>
        </View>
      </View>
    );
  }
}