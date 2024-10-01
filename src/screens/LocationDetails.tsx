import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../themes/colors';
import FollowingDay from '../components/FollowingDay';
import { fetchCityData, fetchFollowingDays } from '../services/api';
import Footer from '../components/Footer';
import { ApiError, CityData, FollowingDayInterface } from '../types/api';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RooStackParamList } from '../navigation/Root';
import { useGetCitiesDataQuery } from '../store/api';

const LocationDetails = () => {
  const [current, setCurrent] = useState<null | CityData | ApiError>(null);
  const [follwoingDays, setFollwojngDays] = useState<
    null | FollowingDayInterface | ApiError
  >(null);
  const {
    params: { location, title },
  } = useRoute<RouteProp<RooStackParamList, 'LocationDetails'>>();

  const query = useGetCitiesDataQuery({ location });

  console.log(query);

  useEffect(() => {
    const init = async () => {
      const respoonse = await fetchCityData(location);
      setCurrent(respoonse);
      const fetchFollowingDaysResponse = await fetchFollowingDays(location);
      setFollwojngDays(fetchFollowingDaysResponse);
    };
    init();
  }, []);

  if (
    !current ||
    !follwoingDays ||
    'error' in current ||
    'error' in follwoingDays
  ) {
    return (
      <ActivityIndicator
        color={COLORS.sun}
        size={'large'}
        style={{ height: '100%' }}
      />
    );
  }
  //TODO: Add error handling

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.cityName}>{title}</Text>
        <Text style={styles.temperature}>{current.current.temp_c} ℃</Text>
        <View style={styles.weatherContainer}>
          <Image
            source={{ uri: `https:${current.current.condition.icon}` }}
            width={150}
            height={150}
          />

          <Text style={styles.weather}>{current.current.condition.text}</Text>
        </View>
        <View style={styles.followingDatsContainer}>
          {follwoingDays.forecast.forecastday.map((item, index, allDays) => (
            <FollowingDay
              key={item.date}
              day={item}
              isLast={index === allDays.length - 1}
              locationName={current.location.name}
            />
          ))}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default LocationDetails;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  weatherContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  cityName: {
    fontSize: 32,
    color: COLORS.text,
    fontWeight: 'bold',
    marginTop: 20,
  },
  temperature: {
    fontSize: 72,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 20,
  },
  weather: {
    fontSize: 26,
    color: COLORS.text,
  },
  followingDatsContainer: {
    margin: 10,
    marginTop: 40,
    backgroundColor: COLORS.lightBlue,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 10,
  },
});
