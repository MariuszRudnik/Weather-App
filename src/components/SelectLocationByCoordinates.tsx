import React from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { COLORS } from '../themes/colors';
import * as Location from 'expo-location';
import { fetchCityData } from '../services/api';
import { ListItem } from '../hooks/useLocationList';
import { getLocation, showPermissionsDeniedAlert } from '../utils/location';

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
        const location = await getLocation();
        onLocationSelect(location);
      } catch (error: any) {
        if (error.code === 'E_LOCATION_UNAVAILABLE') {
          showPermissionsDeniedAlert();
        } else {
          Alert.alert('Błąd', 'Nie udało się pobrać danych lokalizacji');
        }
      }
    }
    if (status === 'denied') {
      Alert.alert(
        'Brak dostępu do lokalizacji',
        'Włącz lokalizację w ustawieniach',
      );
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
