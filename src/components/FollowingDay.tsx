import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../themes/colors';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import isToday from 'dayjs/plugin/isToday';
import { Day, ForecastDay } from '../types/api';
import ListItem from './ListItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RooStackParamList } from '../navigation/Root';

dayjs.extend(isToday);

interface Props {
  day: ForecastDay;
  isLast: boolean;
  locationName: string;
}

const FollowingDay = ({ day, isLast, locationName }: Props) => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RooStackParamList>>();
  const formattedDate = dayjs(day.date).isToday()
    ? 'Dzisiaj'
    : dayjs(day.date).locale('pl').format('dddd');
  return (
    <ListItem
      isLast={isLast}
      title={formattedDate}
      condition={day.day.condition.icon}
      value={` ${Math.floor(day.day.mintemp_c)} ℃ - ${Math.floor(day.day.maxtemp_c)} ℃`}
      onPress={() => navigate('DayDetails', { day, locationName })}
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
