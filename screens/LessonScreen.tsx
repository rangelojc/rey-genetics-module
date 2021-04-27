import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function LessonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  },
  title: {
    fontSize: 20,
  },
});
