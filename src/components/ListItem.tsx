import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../themes/colors';

export interface ListItemProps {
  isLast: boolean;
  title: string;
  value: string | number;
  condition: string;
  onPress?: () => void;
  date?: string;
}

const ListItem = ({
  isLast,
  title,
  value,
  condition,
  onPress,
}: ListItemProps) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.container, isLast && styles.separator]}
        disabled={!onPress}
        onPress={onPress}
      >
        <Text style={styles.content}>{title}</Text>
        <Text style={[styles.content, styles.value]}>{value}</Text>
        <View style={styles.condition}>
          <Image
            source={{ uri: `https:${condition}` }}
            width={40}
            height={40}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </>
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
  condition: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
