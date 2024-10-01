import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from './src/themes/colors';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Root from './src/navigation/Root';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './src/store/store';

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
        <StoreProvider store={store}>
          <Root />
        </StoreProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
