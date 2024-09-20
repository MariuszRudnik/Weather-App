import { Alert } from 'react-native';
import * as Location from 'expo-location';
import { fetchCityData } from '../services/api';

export const showPermissionsDeniedAlert = () => {
  Alert.alert(
    'Brak dostępu do lokalizacji',
    'Włącz lokalizację w ustawieniach',
  );
};
export const getLocation = async () => {
  const location = await Location.getCurrentPositionAsync();
  const locationName = await getLocationName(location);
  return {
    value: `${location.coords.latitude},${location.coords.longitude}`,
    title: locationName,
  };
};
export const getLocationName = async (location: Location.LocationObject) => {
  const cityData = await fetchCityData(
    `${location.coords.latitude},${location.coords.longitude}`,
  );
  if ('location' in cityData) {
    return cityData.location.name;
  }
  return `${location.coords.latitude},${location.coords.longitude}`;
};
