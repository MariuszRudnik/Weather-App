import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../themes/colors';

interface ListItemProps {
  isLast: boolean;
  title: string;
  value: string | number;
  condition: string;
}

const ListItem = ({ isLast, title, value, condition }: ListItemProps) => {
  return (
    <View style={[styles.container, isLast && styles.separator]}>
      <Text style={styles.content}>{title}</Text>
      <Text style={[styles.content, styles.value]}>{value}</Text>
      <Image
        source={{ uri: `https:${condition}` }}
        width={40}
        height={40}
        resizeMode="contain"
      />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 50,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: COLORS.backgroundColor,
  },

  content: {
    flex: 1,
    color: COLORS.text,
  },
  value: {
    textAlign: 'center',
    fontWeight: '600',
  },
});
