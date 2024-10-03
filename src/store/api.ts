import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CityData, FollowingDayInterface } from '../types/api';
import FollowingDay from '../components/FollowingDay';

export const weatherApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL_W }),
  endpoints: (builder) => {
    return {
      getCitiesData: builder.query<CityData, { location: string }>({
        query: ({ location }) => {
          return {
            url: 'current.json',
            params: {
              key: process.env.EXPO_PUBLIC_API_KEY,
              q: location,
              lang: 'pl',
            },
          };
        },
      }),
      getFollowingDays: builder.query<
        FollowingDayInterface,
        { location: string }
      >({
        query: ({ location }) => {
          return {
            url: 'forecast.json',
            params: {
              key: process.env.EXPO_PUBLIC_API_KEY,
              lang: 'pl',
              days: 3,
              q: location,
            },
          };
        },
      }),
    };
  },
});

export const { useGetCitiesDataQuery, useGetFollowingDaysQuery } = weatherApi;
