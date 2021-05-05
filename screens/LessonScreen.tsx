import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import GlobalStyles from "../styles/GlobalStyles";

import LessonList from '../components/LessonList';
import Header from "../components/Header";

export default function LessonScreen(props: any) {
  return (
    <View style={GlobalStyles.mainContainer}>
      <Header title="Lessons" />

      <ScrollView style={GlobalStyles.container}>
        <LessonList style={{ marginTop: 10 }}></LessonList>
      </ScrollView>
    </View>
  );
}