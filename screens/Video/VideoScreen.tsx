import React from 'react';

import { ScrollView, View } from 'react-native';

import GlobalStyles from "../../styles/GlobalStyles";
import Cover from "../../components/Cover";

import VideoList from './VideoList';

export default function VideoScreen(props: any) {
  return (
    <ScrollView style={GlobalStyles.mainContainer}>
      <Cover navigation={props.navigation} type="Videos" />

      <View style={GlobalStyles.mainWrapper}>
        <VideoList style={{ marginTop: 10 }} navigation={props.navigation}></VideoList>
      </View>
    </ScrollView>
  );
}