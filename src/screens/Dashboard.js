import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../themes/colors';
import FollowingDay from '../components/FollowingDay';

const FOLLOWING_DAY = [
  { name: 'Dzisiaj', temperature: '22 ℃', value: 22, type: 'sun' },
  { name: 'Jutro', temperature: '24 ℃', value: 24, type: 'cloud' },
  { name: 'Pojutrze', temperature: '25 ℃', value: 25, type: 'cloud' },
];

const Dashboard = () => {
  return (
   <ScrollView>
     <View style={styles.container}>
       <Text style={styles.cityName}>Warszawa</Text>
       <Text style={styles.temperature}>22 ℃</Text>
       <View style={styles.weatherContainer}>
         <Feather name="sun" size={100} color={COLORS.sun} />
         <Text style={styles.weather}>Słonecznie</Text>
       </View>
       <View style={styles.followingDatsContainer}>
         {FOLLOWING_DAY.map((item, index) => (
             <FollowingDay key={item.name} {...item} isLast={index === FOLLOWING_DAY.length -1} />
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
  }
});
