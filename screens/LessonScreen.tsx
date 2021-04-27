import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import HTMLViewer from '../components/HTMLViewer';

export default function LessonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lessons</Text>
      <HTMLViewer fileName="lesson1"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  },
  title: {
  },
});
