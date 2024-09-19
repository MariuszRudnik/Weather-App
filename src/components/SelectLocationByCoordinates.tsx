import React from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { COLORS } from '../themes/colors';
import * as Location from 'expo-location';

const SelectLocationByCoordinates = () => {
  const onButtonPress = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    }
    if (status === 'denied') {
      Alert.alert(
        'Brak dostępu do lokalizacji',
        'Włącz lokalizację w ustawieniach',
      );
    } else {
      console.log('Permission to access location was denied');
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onButtonPress}>
      <EvilIcons name="location" size={24} color={COLORS.text} />
    </TouchableOpacity>
  );
};

export default SelectLocationByCoordinates;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    alignSelf: 'center',
  },
});
