import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import { ScrollView, View, Text } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../../components/Header";

export default function VideoOpenScreen({ route }: any) {
  let videoTitle = '';

  const isFocused = useIsFocused();

  if (isFocused) {
    videoTitle = route.params.params.videoTitle;
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      <Header title={videoTitle} backAction="true" />

      <View style={{ ...GlobalStyles.column, ...GlobalStyles.center, ...GlobalStyles.flex }}>
        <Text>No content</Text>
      </View>
    </View>
  );
}