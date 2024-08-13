export const fetchCityData = async () => {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL_W}/current.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=Warszawa&lang=pl`,
  );
  return response.json();
};

export const fetchFollowingDays = async () => {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL_W}/forecast.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=Warszawa&lang=pl&days=3`,
  );

  return response.json();
};
