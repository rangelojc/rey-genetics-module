import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GlobalStyles from "../styles/GlobalStyles";

import LessonList from '../components/LessonList';
import Header from "../components/Header";

export default class LessonScreen extends Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <View style={GlobalStyles.mainContainer}>
        <Header title="Lessons" />

        <View style={GlobalStyles.container}>
          <LessonList></LessonList>
        </View>
      </View>
    );
  }
}