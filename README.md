# Weather-App

### Opis
**Weather-App** to aplikacja do sprawdzania prognozy pogody na najbliższe trzy dni, a także szczegółowych danych pogodowych na wybraną lokalizację. Aplikacja umożliwia szybkie dodawanie lokalizacji, z których można sprawdzić aktualną temperaturę, prognozę pogody oraz szczegóły dotyczące przewidywanej temperatury i warunków atmosferycznych o różnych porach dnia.

### Funkcjonalności
- Wyświetlanie aktualnej temperatury i warunków pogodowych dla wybranej lokalizacji.
- Prognoza pogody na najbliższe trzy dni.
- Szczegółowe informacje o pogodzie w ciągu dnia.
- Możliwość dodawania i usuwania lokalizacji.
- Wsparcie dla systemów iOS i Android.

### Technologie
- **React Native** – framework do budowania aplikacji mobilnych.
- **Expo** – narzędzie do szybszego prototypowania aplikacji mobilnych.
- **Redux Toolkit** – do zarządzania stanem aplikacji.
- **WeatherAPI.com** – zewnętrzne API do pobierania danych pogodowych.

### Wymagania systemowe
- iOS 12.0 lub wyższy
- Android 7.0 lub wyższy

### Instalacja

1. Sklonuj repozytorium:
   ```bash
   git clone <repo-url>
    ```
2. Przejdź do katalogu projektu:
   ```bash
   cd Weather-App

    ```
3.  Zainstaluj wymagane zależności:
    ```bash
    npm install
    ```
   4.  Zarejestruj się na stronie WeatherAPI.com i utwórz darmowe konto, aby uzyskać klucz API potrzebny do pobierania danych pogodowych.
5. Skopiuj plik .env.template i zmień jego nazwę na .env:
   ```bash
   cp .env.template .env
   ``` 
   6. W pliku .env wprowadź swój klucz API z WeatherAPI:

### Uruchomienie
iOS (przy użyciu Expo):
```bash 
npm run ios
```
Android (przy użyciu Expo):
```bash 
npm run android
```

<div>
  <img src="https://github.com/MariuszRudnik/Weather-App/blob/main/1.png?raw=true"/>
</div>