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
import { RouteProp, useRoute } from '@react-navigation/native';
import { RooStackParamList } from '../navigation/Root';

const DayDetails = () => {
  const {
    params: { day, locationName },
  } = useRoute<any>();

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
      renderItem={({ item: hour, index }) => {
        const isLast = index === day.hour.length - 1;
        return (
          <View
            style={[
              styles.item,
              index === 0 && styles.firstItem,
              isLast && styles.lastItem,
            ]}
          >
            <ListItem
              key={hour.time}
              isLast={index === day.hour.length - 1}
              title={hour.time}
              value={hour.temp_c}
              condition={hour.condition.icon}
            />
          </View>
        );
      }}
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
  item: {
    backgroundColor: COLORS.lightBlue,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  firstItem: {
    marginTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
  },
  lastItem: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 10,
  },
});
