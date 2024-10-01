import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CityData } from '../types/api';

export const weatherApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL_W }),
  endpoints: (builder) => ({
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
  }),
});

export const { useGetCitiesDataQuery } = weatherApi;
