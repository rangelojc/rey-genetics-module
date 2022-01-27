import { StatusBar } from 'expo-status-bar';

import React from 'react';
import 'react-native-gesture-handler';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

//Theme
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';

import ThemeContext from './theme/context';
import themeJson from './theme/theme.json';

//Route
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  if (!isLoadingComplete) {
    return null;
  }
  else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ApplicationProvider {...eva} theme={{ ...eva, ...themeJson }}>
            <StatusBar backgroundColor="#728544" style="light" />
            <AppNavigator />
          </ApplicationProvider>
        </ThemeContext.Provider>
      </>
    );
  }
}
