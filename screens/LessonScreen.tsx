import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GlobalStyles from "../styles/GlobalStyles";

import LessonList from '../components/LessonList';
export default class LessonScreen extends Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.title}>Lessons</Text>
        <LessonList></LessonList>
      </View>
    );
  }
}