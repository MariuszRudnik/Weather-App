import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListItem } from '../hooks/useLocationList';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';

interface LocationState {
  locations: ListItem[];
}
const initialState: LocationState = { locations: [] };

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    addLocation: (state, { payload }: PayloadAction<Omit<ListItem, 'id'>>) => {
      state.locations.push({ id: uuidv4(), ...payload });
    },
    removeLocation: (state, { payload }: PayloadAction<ListItem>) => {
      const toRemoveIndex = state.locations.findIndex(
        (item) => item.id === payload.id,
      );
      if (toRemoveIndex !== -1) {
        state.locations.splice(toRemoveIndex, 1);
      }
    },
  },
});

export const { addLocation, removeLocation } = locationSlice.actions;
export const useAppDispatch = () => useDispatch<AppDispatch>();
