import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RooStackParamList } from '../navigation/Root';
import { COLORS } from '../themes/colors';
import { SearchInput } from '../components/SearchInput';

interface ListItem {
  title: string;
  value: string;
}

const SelectLocation = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RooStackParamList>>();

  const [list, setList] = useState<ListItem[]>([]);

  return (
    <FlatList
      data={list}
      ListHeaderComponent={
        <SearchInput
          onSearch={(value) =>
            setList([...list, { title: value, value: value }])
          }
        />
      }
      ListHeaderComponentStyle={styles.header}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate('LocationDetails', { location: item.value })}
        >
          <Text style={styles.itemColor}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default SelectLocation;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    marginBottom: 40,
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
  item: {
    width: '100%',
    backgroundColor: COLORS.lightBlue,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },

  itemColor: {
    color: COLORS.text,
    fontSize: 16,
  },
});
