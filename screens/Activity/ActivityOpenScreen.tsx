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

export default function ActivityScreen({ route, navigation }: any) {
  let activityTitle = '';

  const isFocused = useIsFocused();

  if (isFocused) {
    activityTitle = route.params.params.activityTitle;
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      <CoverHeader title={activityTitle} navigation={navigation} />

      <View style={GlobalStyles.mainWrapper}>
        <View style={styles.container}>
          <Text>No content</Text>
        </View>
      </View>
    </View>
  );
}