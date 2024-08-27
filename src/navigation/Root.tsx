import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LocationDetails from '../screens/LocationDetails';
import DayDetails from '../screens/DayDetails';
import SelectLocation from '../screens/SelectLocation';
import { ForecastDay } from '../types/api';

export type RooStackParamList = {
  SelectLocation: undefined;
  LocationDetails: undefined;
  DayDetails: {
    day: ForecastDay;
    locationName: string;
  };
};
const Stack = createStackNavigator();
const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SelectLocation"
    >
      <Stack.Screen name="LocationDetails" component={LocationDetails} />
      <Stack.Screen name="DayDetails" component={DayDetails} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
    </Stack.Navigator>
  );
};

export default Root;

const styles = StyleSheet.create({});
