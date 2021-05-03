import React, { Component } from 'react';

import GlobalStyles from "../styles/GlobalStyles";
import { Text, View } from '../components/Themed';

import * as Lessons from "../assets/lessons/lessonModule";

const EmptyLessonView = () => {
  return (
    <View style={GlobalStyles.empty}>
      <Text>Content not found.</Text>
    </View>
  )
}
export default class LessonViewScreen extends Component {
  lessonName: string;
  lessonTitle: string;

  constructor(props: any) {
    super(props);

    console.log();

    this.lessonName = props.route.params.params.lessonName;
    this.lessonTitle = props.route.params.params.lessonTitle;
  }

  getTargetLesson() {
    let target = null;

    switch (this.lessonName) {
      case "lesson1": target = <Lessons.Lesson1 />;
      case "lesson2": target = <Lessons.Lesson2 />;
      case "lesson3": target = <Lessons.Lesson3 />;
      case "lesson4": target = <Lessons.Lesson4 />;

      default: target = <EmptyLessonView />;
    }

    return target;
  }

  componentDidMount() {
    console.log(this.lessonName);
  }

  public render() {
    let targetLesson = this.getTargetLesson();
    let lessonTitle = this.lessonTitle ? <Text>{this.lessonTitle}</Text> : null;

    return (
      <View style={GlobalStyles.container}>
        {lessonTitle}
        {targetLesson}
      </View>
    );
  }
}

