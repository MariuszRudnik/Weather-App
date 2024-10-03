import 'react-native-get-random-values';
import { useAppSelector } from '../store/store';
import { addLocation, removeLocation, useAppDispatch } from '../store/location';

export interface ListItem {
  id: string;
  title: string;
  value: string;
}

export const useLocationList = () => {
  const { locations } = useAppSelector((state) => state.location);
  const dispatch = useAppDispatch();
  const addToList = (item: ListItem) => {
    dispatch(addLocation(item));
  };
  const removeFormatList = (id: ListItem) => {
    dispatch(removeLocation(id));
  };
  return { list: locations, addToList, removeFormatList };
};
