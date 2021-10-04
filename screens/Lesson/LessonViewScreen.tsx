import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Text } from '@ui-kitten/components';

import GlobalStyles from "../../styles/GlobalStyles";
import Icons from "../../components/Icons";

import * as Lessons from "../../assets/lessons/lessonModule";

import CoverHeader from "../../components/CoverHeader";

const EmptyLessonView = () => (
  <View style={{ ...GlobalStyles.column, ...GlobalStyles.center, ...GlobalStyles.flex }}>
    <Icons.Question style={{ height: 30, width: 30 }} />
    <Text style={{ fontSize: 22 }}>Content not found.</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 10,
    fontSize: 20,
  }
})

export default function LessonViewScreen({ route, navigation }: any) {
  let jsxTargetLesson = null;
  let jsxHeader = null;

  const isFocused = useIsFocused();

  if (isFocused) {
    let lessonTitle = route.params.params.lessonTitle;
    let lessonName = route.params.params.lessonName;

    switch (lessonName) {
      case "lesson1": jsxTargetLesson = <Lessons.Lesson1 />; break;
      case "lesson2": jsxTargetLesson = <Lessons.Lesson2 />; break;
      case "lesson3": jsxTargetLesson = <Lessons.Lesson3 />; break;
      case "lesson4": jsxTargetLesson = <Lessons.Lesson4 />; break;
      default: jsxTargetLesson = <EmptyLessonView />;
    }

    jsxHeader = <CoverHeader title={lessonTitle} navigation={navigation} />
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      {jsxHeader}

      <View style={GlobalStyles.mainWrapper}>
        <View style={styles.container}>
          {jsxTargetLesson}
        </View>
      </View>
    </View >
  );
}

