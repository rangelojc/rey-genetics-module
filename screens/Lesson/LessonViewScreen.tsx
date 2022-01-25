import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Text } from '@ui-kitten/components';

import GlobalStyles from "../../styles/GlobalStyles";
import Icons from "../../components/Icons";

import * as Lessons from "../../assets/lessons/lessonModule";

import CoverHeader from "../../components/CoverHeader";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 10,
    fontSize: 20,
  },
  emptyContainer: {
    height: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const EmptyLessonView = () => (
  <View style={styles.emptyContainer}>
    <Text>Content not found.</Text>
  </View>
)

export default function LessonViewScreen({ route, navigation }: any) {
  let jsxTargetLesson = null;
  let jsxHeader = null;

  const isFocused = useIsFocused();

  if (isFocused) {
    let lessonTitle = route.params.params.lessonTitle;
    let lessonName = route.params.params.lessonName;

    switch (lessonName) {
      case "topic1": jsxTargetLesson = <Lessons.Topic1 />; break;
      case "topic2": jsxTargetLesson = <Lessons.Topic2 />; break;
      case "topic3": jsxTargetLesson = <Lessons.Topic3 />; break;
      case "topic4": jsxTargetLesson = <Lessons.Topic4 />; break;
      default: jsxTargetLesson = <EmptyLessonView />;
    }

    jsxHeader = <CoverHeader title={lessonTitle} navigation={navigation} />
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      {jsxHeader}

      <View style={GlobalStyles.mainWrapperView}>
        <View style={styles.container}>
          {jsxTargetLesson}
        </View>
      </View>
    </View >
  );
}

