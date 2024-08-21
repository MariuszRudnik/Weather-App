import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import { CityData, FollowingDayInterface } from '../types/api';
import { fetchCityData, fetchFollowingDays } from '../services/api';
import { COLORS } from '../themes/colors';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import ListItem from '../components/ListItem';

const DayDetails = () => {
  const [current, setCurrent] = useState<null | CityData>(null);
  const [follwoingDays, setFollwojngDays] =
    useState<null | FollowingDayInterface>(null);

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
  const day = follwoingDays.forecast.forecastday[0];
  const locationName = 'Warszawa';
  return (
    <FlatList
      data={day.hour}
      ListHeaderComponent={
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.location, styles.text]}>{locationName}</Text>
          <Text style={[styles.date, styles.text]}>
            {dayjs(day.date).locale('pl').format('dddd D MMMM YYYY')}
          </Text>
          <Image
            source={{ uri: `https:${day.day.condition.icon}` }}
            width={100}
            height={100}
          />
          <Text style={[styles.temperature, styles.text]}>
            {Math.floor(day.day.maxtemp_c)} - {Math.ceil(day.day.maxtemp_c)}
          </Text>
        </View>
      }
      renderItem={({ item: hour, index }) => (
        <View>
          <ListItem
            key={hour.time}
            isLast={index === day.hour.length - 1}
            title={hour.time}
            value={hour.temp_c}
            condition={hour.condition.icon}
          />
        </View>
      )}
    />
  );
};

export default DayDetails;

const styles = StyleSheet.create({
  location: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  date: {
    fontSize: 26,
    marginBottom: 20,
  },
  temperature: {
    fontSize: 40,
  },
  text: {
    marginTop: 20,
    color: COLORS.text,
  },
  listContainer: {
    backgroundColor: COLORS.lightBlue,
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
