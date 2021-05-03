import React, { Component } from 'react';

import { Text, View } from '../components/Themed';

import GlobalStyles from "../styles/GlobalStyles";

import * as Lessons from "../assets/lessons/lessonModule";
export default class LessonViewScreen extends Component {
  lessonName: string;

  constructor(props: any) {
    super(props);
    this.lessonName = props.lessonName;
  }

  getTargetLesson() {
    let target = null;

    switch (this.lessonName) {
      case "lesson1": target = Lessons.Lesson1;
      case "lesson2": target = Lessons.Lesson2;
      case "lesson3": target = Lessons.Lesson3;
      case "lesson4": target = Lessons.Lesson4;
      default: target = Lessons.Lesson1;
    }

    return target;
  }

  public render() {
    let targetLesson = this.getTargetLesson();

    return (
      <View style={GlobalStyles.container}>
        <Text>Lesson View</Text>
        { targetLesson}
      </View>
    );
  }
}