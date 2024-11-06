// ApiScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import styles from './css/ApiScreenStyle';

const ApiScreen: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError('Erro ao carregar as postagens');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Postagens</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ApiScreen;
