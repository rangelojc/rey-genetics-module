import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import { ScrollView, View, Text } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../../components/Header";

export default function ActivityScreen({ route }: any) {
  let activityTitle = '';

  const isFocused = useIsFocused();

  if (isFocused) {
    activityTitle = route.params.params.activityTitle;
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      <Header title={activityTitle} backAction="true" />

      <View style={{ ...GlobalStyles.column, ...GlobalStyles.center, ...GlobalStyles.flex }}>
        <Text>No content</Text>
      </View>
    </View>
  );
}