import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../themes/colors';

const FollowingDay = ({ name, value }) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.content]}>{name}</Text>
      <Text style={[styles.content, styles.value]}>{value}</Text>
      <Feather name="sun" size={40} style={[styles.content, styles.type]} />
    </View>
  );
};

export default FollowingDay;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
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

});
