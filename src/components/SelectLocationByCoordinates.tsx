import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { COLORS } from '../themes/colors';

const SelectLocationByCoordinates = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <EvilIcons name="location" size={24} color={COLORS.text} />
    </TouchableOpacity>
  );
};

export default SelectLocationByCoordinates;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    alignSelf: 'center',
  },
});
