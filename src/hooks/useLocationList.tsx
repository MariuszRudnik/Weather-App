import { useEffect, useState } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export interface ListItem {
  id: string;
  title: string;
  value: string;
}

export const useLocationList = () => {
  const [list, setList] = useState<ListItem[]>([]);
  const { getItem, setItem } = useAsyncStorage('locationsList');
  useEffect(() => {
    const init = async () => {
      const storageItem = await getItem();
      if (storageItem) {
        setList(JSON.parse(storageItem));
      }
    };
    init();
  }, []);

  const removeFormatList = (item: ListItem) => {
    const toRemove = list.findIndex(
      (listElement) => listElement.id === item.id,
    );
    if (toRemove !== -1) {
      const newList = [...list];
      newList.splice(toRemove, 1);
      setList(newList);
      setItem(JSON.stringify(newList));
    }
  };

  const addToList = (item: Omit<ListItem, 'id'>) => {
    const newList = [...list, { ...item, id: uuidv4() }];
    setList(newList);
    setItem(JSON.stringify(newList));
  };
  return { list, addToList, removeFormatList };
};
