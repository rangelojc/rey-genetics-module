import React from 'react';

import { ScrollView, View } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../../components/Header";

import VideoList from './VideoList';

export default function VideoScreen(props: any) {
  return (
    <View style={GlobalStyles.mainContainer}>
      <Header title="Videos" />

      <ScrollView style={GlobalStyles.container}>
        <VideoList style={{ marginTop: 10 }}></VideoList>
      </ScrollView>
    </View>
  );
}