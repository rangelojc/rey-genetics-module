import { StatusBar } from 'expo-status-bar';

import React from 'react';
import 'react-native-gesture-handler';
import { Text } from "react-native"

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';

import Router from './navigation/Router';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <StatusBar style="dark" />
          <Router />
        </ApplicationProvider>
      </>
    );
  }
}
