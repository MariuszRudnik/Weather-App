import { Alert } from 'react-native';
import * as Location from 'expo-location';
import { weatherApi } from '../store/api';
import { store } from '../store/store';

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
  try {
    const cityData = await store
      .dispatch(
        weatherApi.endpoints.getCitiesData.initiate({
          location: `${location.coords.latitude},${location.coords.longitude}`,
        }),
      )
      .unwrap();
    return cityData.location.name;
  } catch (error) {
    return `${location.coords.latitude},${location.coords.longitude}`;
  }
};
