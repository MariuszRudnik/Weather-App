import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LocationDetails from './src/screens/LocationDetails';
import { COLORS } from './src/themes/colors';
import Footer from './src/components/Footer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import DayDetails from './src/screens/DayDetails';
import React from 'react';
import Root from './src/navigation/Root';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.backgroundColor,
    card: COLORS.backgroundColor,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Root />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
