import React from 'react';

import { ScrollView, View } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../../components/Header";

import ActivityList from './ActivityList';

export default function ActivityScreen(props: any) {
  return (
    <View style={GlobalStyles.mainContainer}>
      <Header title="Activities" />

      <ScrollView style={GlobalStyles.container}>
        <ActivityList style={{ marginTop: 10 }}></ActivityList>
      </ScrollView>
    </View>
  );
}