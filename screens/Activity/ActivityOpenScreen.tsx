import React from 'react';

import { ScrollView, View, Text } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../../components/Header";

export default function ActivityScreen(props: any) {
  return (
    <View style={GlobalStyles.mainContainer}>
      <Header title="Activities" backAction="true" />

      <View style={{ ...GlobalStyles.column, ...GlobalStyles.center, ...GlobalStyles.flex }}>
        <Text>No content</Text>
      </View>
    </View>
  );
}