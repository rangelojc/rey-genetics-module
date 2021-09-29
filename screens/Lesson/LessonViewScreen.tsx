import React from 'react';
import { Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import GlobalStyles from "../../styles/GlobalStyles";
import Icons from "../../components/Icons";

import * as Lessons from "../../assets/lessons/lessonModule";

import Header from "../../components/Header";

const EmptyLessonView = () => (
  <View style={{ ...GlobalStyles.column, ...GlobalStyles.center, ...GlobalStyles.flex }}>
    <Icons.Question style={{ height: 30, width: 30 }} />
    <Text style={{ fontSize: 22 }}>Content not found.</Text>
  </View>
)

export default function LessonViewScreen({ route, navigation }: any) {
  let jsxTargetLesson = null;
  let jsxLessonTitle = null;

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

    jsxLessonTitle = lessonTitle ?
      <Header title={lessonTitle} backAction="true" navigation={navigation} />
      : null;
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      {jsxLessonTitle}

      <View style={GlobalStyles.containerWrapper}>
        {jsxTargetLesson}
      </View>
    </View >
  );
}

