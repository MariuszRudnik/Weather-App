import { CityData, FollowingDayInterface } from '../types/api';

export const fetchCityData = async (location: string): Promise<CityData> => {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL_W}/current.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=${location}&lang=pl`,
  );
  return response.json();
};

export const fetchFollowingDays = async (
  location: string,
): Promise<FollowingDayInterface> => {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL_W}/forecast.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=${location}&lang=pl&days=3`,
  );

  return response.json();
};
