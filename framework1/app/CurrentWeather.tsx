// CurrentWeather.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentWeather: React.FC = () => {
  const [weather, setWeather] = useState<{ location: string; temperature: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      // Usando a API MetaWeather para obter a localização 'São Paulo'
      const response = await fetch('https://www.metaweather.com/api/location/455827/');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do clima');
      }
      const data = await response.json();
      const todayWeather = data.consolidated_weather[0]; // Pegando a previsão do primeiro dia
      const location = data.title;
      const temperature = Math.round(todayWeather.the_temp); // Temperatura atual

      setWeather({ location, temperature });
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erro desconhecido');
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clima Atual</Text>
      {error ? (
        <Text style={styles.errorText}>Erro: {error}</Text>
      ) : weather ? (
        <Text style={styles.weatherText}>
          {`Localização: ${weather.location}\nTemperatura: ${weather.temperature}°C`}
        </Text>
      ) : (
        <Text style={styles.loadingText}>Carregando...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weatherText: {
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  loadingText: {
    fontSize: 18,
  },
});

export default CurrentWeather;
