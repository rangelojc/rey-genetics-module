import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import { StyleSheet, View, Text } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import CoverHeader from "../../components/CoverHeader";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 10,
    marginBottom: 20,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default function QuizOpenScreen({ route, navigation }: any) {
  let quizTitle = '';

  const isFocused = useIsFocused();

  if (isFocused) {
    quizTitle = route.params.params.quizTitle;
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      <CoverHeader title={quizTitle} navigation={navigation} />

      <View style={GlobalStyles.mainWrapperView}>
        <View style={styles.container}>
          <Text>No content</Text>
        </View>
      </View>
    </View>
  );
}