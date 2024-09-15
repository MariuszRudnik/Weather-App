import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../themes/colors';

interface SearchInputProps {
  onSearch: (value: string) => void;
}
export const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [value, setValue] = useState('');

  const onSearchValue = () => {
    onSearch(value);
    setValue('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Wpisz lokalizację"
        placeholderTextColor={COLORS.text}
        selectionColor={COLORS.text}
        style={styles.input}
        onChangeText={setValue}
        value={value}
      />

      <TouchableOpacity style={styles.button} onPress={onSearchValue}>
        <Text style={styles.buttonText}>Dodaj</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.links,
    padding: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: COLORS.text,
    borderRadius: 10,
  },
  button: {
    backgroundColor: COLORS.links,
    width: '100%',
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.text,
    fontSize: 16,
  },
  item: {
    width: '100%',
    backgroundColor: COLORS.lightBlue,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  listContainer: {
    width: '100%',
    marginTop: 40,
  },
  itemColor: {
    color: COLORS.text,
    fontSize: 16,
  },
});
