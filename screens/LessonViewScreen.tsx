import React from 'react';
import { Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import GlobalStyles from "../styles/GlobalStyles";

import * as Lessons from "../assets/lessons/lessonModule";

import Header from "../components/Header";

const EmptyLessonView = () => {
  return (
    <View style={GlobalStyles.empty}>
      <Text>Content not found.</Text>
    </View>
  )
}

export default function LessonViewScreen({ route }: any) {
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

    jsxLessonTitle = lessonTitle ? <Header title={lessonTitle} backAction="true" /> : null;
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      {jsxLessonTitle}

      <View style={GlobalStyles.containerWhite}>
        {jsxTargetLesson}
      </View>
    </View>
  );
}

