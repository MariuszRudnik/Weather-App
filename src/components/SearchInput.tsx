import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../themes/colors';
import SelectLocationByCoordinates from './SelectLocationByCoordinates';

interface SearchInputProps {
  onSearch: (value: string) => void;
  rightElement?: React.ReactNode;
}
export const SearchInput = ({ onSearch, rightElement }: SearchInputProps) => {
  const [value, setValue] = useState('');

  const onSearchValue = () => {
    onSearch(value);
    setValue('');
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder="Wpisz lokalizację"
          placeholderTextColor={COLORS.text}
          selectionColor={COLORS.text}
          style={styles.input}
          onChangeText={setValue}
          value={value}
        />
        {rightElement}
      </View>

      <TouchableOpacity style={styles.button} onPress={onSearchValue}>
        <Text style={styles.buttonText}>Dodaj</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
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
