import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import GlobalStyles from "../styles/GlobalStyles";

import LessonList from '../components/LessonList';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 20
  },
});
export default class LessonScreen extends Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <View style={GlobalStyles.container}>
        <Text>Lessons</Text>
        <LessonList style={styles.listContainer}></LessonList>
      </View>
    );
  }
}