import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
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
  const [jsxTargetLesson, setJsxTargetLesson] = useState<any>(<></>);
  const [lessonTitle, setLessonTitle] = useState<any>(<></>);

  useEffect(() => {
    setLessonTitle(route.params.params.lessonTitle);

    switch (route.params.params.lessonName) {
      case "topic1": setJsxTargetLesson(<Lessons.Topic1 />); break;
      case "topic2": setJsxTargetLesson(<Lessons.Topic2 />); break;
      case "topic3": setJsxTargetLesson(<Lessons.Topic3 />); break;
      case "topic4": setJsxTargetLesson(<Lessons.Topic4 />); break;
      default: setJsxTargetLesson(<EmptyLessonView />);
    }
  }, [])

  return (
    <ScrollView style={GlobalStyles.mainContainer}>
      <CoverHeader title={lessonTitle} navigation={navigation} />

      <View style={GlobalStyles.mainWrapperView}>
        <View style={styles.container}>
          {jsxTargetLesson}
        </View>
      </View>
    </ScrollView >
  );
}

