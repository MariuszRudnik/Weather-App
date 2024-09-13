import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RooStackParamList } from '../navigation/Root';
import { COLORS } from '../themes/colors';

interface ListItem {
  title: string;
  value: string;
}

const SelectLocation = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RooStackParamList>>();
  const [value, setValue] = useState('');
  const [list, setList] = useState<ListItem[]>([]);

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

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setList([...list, { title: value, value }]);
          setValue('');
        }}
      >
        <Text style={styles.buttonText}>Dodaj</Text>
      </TouchableOpacity>
      <View style={styles.listContainer}>
        {list.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemColor}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SelectLocation;

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
