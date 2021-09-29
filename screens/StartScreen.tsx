import * as React from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, View, Text, Button } from 'react-native';

import GlobalStyles from "../styles/GlobalStyles";
import { readDirectoryAsync } from 'expo-file-system';

const styles = StyleSheet.create({
  startScreen: {
    color: "red",
  }
})

export default function StartScreen({ navigation }: any) {
  return (
    <View style={GlobalStyles.mainContainer}>
      <Text>Offline Genetics Learning Module</Text>
      <Button
        title="Start"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  )
}