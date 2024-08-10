import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { COLORS } from '../themes/colors';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Power by </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://www.weatherapi.com/')}
      >
        WeatherAPI.com
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  text: {
    color: COLORS.text,
  },
  link: {
    color: COLORS.links,
  },
});
