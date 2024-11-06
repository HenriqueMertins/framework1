// ApiScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import styles from './css/ApiScreenStyle';

const ApiScreen: React.FC = () => {
  const [dogImages, setDogImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const images = [];
        for (let i = 0; i < 15; i++) { // Obtém 15 imagens aleatórias
          const response = await fetch('https://dog.ceo/api/breeds/image/random');
          if (!response.ok) {
            throw new Error('Erro ao carregar as imagens');
          }
          const data = await response.json();
          images.push(data.message);
        }
        setDogImages(images);
      } catch (error) {
        setError('Erro ao carregar as imagens de cachorros');
      } finally {
        setLoading(false);
      }
    };

    fetchDogImages();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fotos de Cachorros</Text>
      <FlatList
        data={dogImages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
        numColumns={3} // Exibe três colunas
      />
    </View>
  );
};

export default ApiScreen;
