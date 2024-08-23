import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RooStackParamList } from '../navigation/Root';

const SelectLocation = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RooStackParamList>>();
  return (
    <View>
      <TouchableOpacity onPress={() => navigate('LocationDetails')}>
        <Text>SelectLocation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectLocation;

const styles = StyleSheet.create({});
