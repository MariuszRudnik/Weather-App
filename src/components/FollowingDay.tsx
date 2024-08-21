import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../themes/colors';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import isToday from 'dayjs/plugin/isToday';
import { Day, ForecastDay } from '../types/api';
import ListItem from './ListItem';

dayjs.extend(isToday);

interface Props {
  date: string;
  day: Day;
  isLast: boolean;
}

const FollowingDay = ({ date, day, isLast }: Props) => {
  console.log(date);
  const formattedDate = dayjs(date).isToday()
    ? 'Dzisiaj'
    : dayjs(date).locale('pl').format('dddd');
  return (
    <ListItem
      isLast={isLast}
      title={formattedDate}
      condition={day.condition.icon}
      value={` ${Math.floor(day.mintemp_c)} ℃ - ${Math.floor(day.maxtemp_c)} ℃`}
    />
  );
};

export default FollowingDay;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 50,
  },
  content: {
    flex: 1,
    color: COLORS.text,
  },
  value: {
    textAlign: 'center',
    fontWeight: '600',
  },
  type: {
    textAlign: 'right',
    color: COLORS.sun,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: COLORS.backgroundColor,
  },
});
