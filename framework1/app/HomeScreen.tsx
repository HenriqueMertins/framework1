import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Animated, Dimensions, ActivityIndicator } from 'react-native';
import styles from './css/HomeScreenSyle';

const { width } = Dimensions.get('window');

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=21");
        if (!response.ok) throw new Error('Erro ao carregar os produtos');
        
        const data = await response.json();
        
        // Filtro para exibir apenas categorias de roupas
        const filteredData = data.filter(
          (item: any) => item.category === "men's clothing" || item.category === "women's clothing"
        );
        
        // Duplicando a lista para aumentar os itens
        const expandedData = [...filteredData, ...filteredData];  // Duplicando a lista

        setProducts(expandedData);
      } catch (error) {
        setError('Erro ao carregar os produtos');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();
  }, [fadeAnim, slideAnim]);

  const itemWidth = (width - 60) / 4;

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mertins Clothes</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Api')}>
          <Text style={styles.buttonText}>Tela sem API</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartIcon} onPress={() => navigation.navigate('Buy')}>
          <Text style={styles.cartIconText}>🛒</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {products.map((item, index) => (
          <Animated.View
            key={`${item.id}-${index}`}  // Garantindo que cada item tenha uma chave única
            style={[
              styles.itemBox,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
                width: itemWidth,
              }
            ]}
          >
            <Image
              source={{ uri: item.image }}
              style={[
                styles.itemImage,
                { width: itemWidth * 0.5, height: itemWidth * 0.5 }
              ]}
              resizeMode="contain"
            />
            <Text style={styles.itemName}>{item.title}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
