import React from 'react';

import { ScrollView, View } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import Cover from "../../components/Cover";

import QuizList from './QuizList';

export default function QuizScreen(props: any) {
  return (
    <ScrollView style={GlobalStyles.mainContainer}>
      <Cover navigation={props.navigation} />

      <View style={GlobalStyles.mainWrapper}>
        <QuizList style={{ marginTop: 10 }}></QuizList>
      </View>
    </ScrollView>
  );
}