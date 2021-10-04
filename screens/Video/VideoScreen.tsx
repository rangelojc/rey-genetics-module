import React from 'react';

import { ScrollView, View } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import Cover from "../../components/Cover";

import VideoList from './VideoList';

export default function VideoScreen(props: any) {
  return (
    <View style={GlobalStyles.mainContainer}>
      <Cover />

      <ScrollView style={GlobalStyles.mainWrapper}>
        <VideoList style={{ marginTop: 10 }}></VideoList>
      </ScrollView>
    </View>
  );
}