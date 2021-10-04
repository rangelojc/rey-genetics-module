import React from 'react';
import { ScrollView, View } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";

import LessonList from './LessonList';
import Cover from "../../components/Cover";

export default function LessonScreen(props: any) {
  return (
    <View style={GlobalStyles.mainContainer}>
      <Cover />

      <ScrollView style={GlobalStyles.mainWrapper}>
        <LessonList style={{ marginTop: 10 }}></LessonList>
      </ScrollView>
    </View>
  );
}