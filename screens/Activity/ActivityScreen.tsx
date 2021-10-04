import React from 'react';

import { ScrollView, View } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import Cover from "../../components/Cover";

import ActivityList from './ActivityList';

export default function ActivityScreen(props: any) {
  return (
    <ScrollView style={GlobalStyles.mainContainer}>
      <Cover />

      <View style={GlobalStyles.mainWrapper}>
        <ActivityList style={{ marginTop: 10 }}></ActivityList>
      </View>
    </ScrollView>
  );
}