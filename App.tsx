import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { COLORS } from './src/theme';
import { Routes } from './src/Routes/router';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.DARK_BLUE}
        translucent
        style="light"
      />
      <Routes />
    </>
  );
};