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

const FOLLOWING_DAY = [
  { name: 'Dzisiaj', temperature: '22 ℃', value: 22, type: 'sun' },
  { name: 'Jutro', temperature: '24 ℃', value: 24, type: 'cloud' },
  { name: 'Pojutrze', temperature: '25 ℃', value: 25, type: 'cloud' },
];

const Dashboard = () => {
  const [current, setCurrent] = useState(null);
  const [follwoingDays, setFollwojngDays] = useState(null);

  useEffect(() => {
    const init = async () => {
      const respoonse = await fetchCityData();
      setCurrent(respoonse);
      const fetchFollowingDaysResponse = await fetchFollowingDays();
      setFollwojngDays(fetchFollowingDaysResponse);
    };
    init();
  }, []);

  if (!current || !follwoingDays) {
    return (
      <ActivityIndicator
        color={COLORS.sun}
        size={'large'}
        style={{ height: '100%' }}
      />
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.cityName}>{current.location.name}</Text>
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
              key={item.data}
              {...item}
              isLast={index === allDays.length - 1}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

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
