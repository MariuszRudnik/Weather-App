import React from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { COLORS } from '../themes/colors';
import * as Location from 'expo-location';
import { fetchCityData } from '../services/api';
import { ListItem } from '../hooks/useLocationList';

interface SelectLocationByCoordinatesProps {
  onLocationSelect: (cityData: Omit<ListItem, 'id'>) => void;
}

const SelectLocationByCoordinates = ({
  onLocationSelect,
}: SelectLocationByCoordinatesProps) => {
  const onButtonPress = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      try {
        const location = await Location.getCurrentPositionAsync();
        const cityData = await fetchCityData(
          `${location.coords.latitude},${location.coords.longitude}`,
        );
        onLocationSelect({
          value: `${location.coords.latitude},${location.coords.longitude}`,
          title:
            'location' in cityData
              ? cityData.location.name
              : `${location.coords.latitude},${location.coords.longitude}`,
        });
      } catch (error: any) {
        if (error.code === 'E_LOCATION_UNAVAILABLE') {
          Alert.alert(
            'Brak dostępu do lokalizacji',
            'Włącz lokalizację w ustawieniach',
          );
        } else {
          console.error(error);
          Alert.alert('Błąd', 'Nie udało się pobrać danych lokalizacji');
        }
      }
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
