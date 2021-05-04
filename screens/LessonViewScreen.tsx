import React from 'react';
import { Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import GlobalStyles from "../styles/GlobalStyles";

import * as Lessons from "../assets/lessons/lessonModule";

const EmptyLessonView = () => {
  return (
    <View style={GlobalStyles.empty}>
      <Text>Content not found.</Text>
    </View>
  )
}

export default function LessonViewScreen({ route }: any) {
  let targetLesson = null;
  let lessonTitle = null;

  const isFocused = useIsFocused();

  if (isFocused) {
    let title = route.params.params.lessonTitle;
    let name = route.params.params.lessonName;

    switch (name) {
      case "lesson1": targetLesson = <Lessons.Lesson1 />; break;
      case "lesson2": targetLesson = <Lessons.Lesson2 />; break;
      case "lesson3": targetLesson = <Lessons.Lesson3 />; break;
      case "lesson4": targetLesson = <Lessons.Lesson4 />; break;
      default: targetLesson = <EmptyLessonView />;
    }

    lessonTitle = title ? <Text style={GlobalStyles.title}>{title}</Text> : null;
  }

  return (
    <View style={GlobalStyles.container}>
      {lessonTitle}
      {targetLesson}
    </View>
  );
}

