import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Animated, Dimensions, ActivityIndicator } from 'react-native';
import styles from './css/HomeScreenSyle';

const { width } = Dimensions.get('window');

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const slidePanelAnim = useRef(new Animated.Value(300)).current; // O painel começa fora da tela, à direita
  const panelWidthAnim = useRef(new Animated.Value(300)).current;

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false); // Novo estado para saber se o painel está aberto

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=21");
        if (!response.ok) throw new Error('Erro ao carregar os produtos');

        const data = await response.json();

        const filteredData = data.filter(
          (item: any) => item.category === "men's clothing" || item.category === "women's clothing"
        );

        const expandedData = [...filteredData, ...filteredData];
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

  const addToCart = (item: any) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const showPanel = () => {
    Animated.parallel([
      Animated.timing(slidePanelAnim, {
        toValue: 0, // O painel se move para a posição visível
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(panelWidthAnim, {
        toValue: 400, // Aumenta a largura do painel
        duration: 300,
        useNativeDriver: false, // `width` não suporta `useNativeDriver`
      })
    ]).start();
    setIsPanelOpen(true); // Marcar que o painel está aberto
  };

  const hidePanel = () => {
    Animated.parallel([
      Animated.timing(slidePanelAnim, {
        toValue: 300, // Move o painel para fora da tela (direita)
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(panelWidthAnim, {
        toValue: 300, // Retorna a largura original
        duration: 300,
        useNativeDriver: false, // `width` não suporta `useNativeDriver`
      })
    ]).start();
    setIsPanelOpen(false); // Marcar que o painel está fechado
  };

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

      {/* Detectando o hover na lateral esquerda */}
      <View
        style={[
          styles.hoverArea,
          { width: isPanelOpen ? 500 : 40 }, // Largura da área de hover controlada pelo estado
        ]}
        onMouseEnter={showPanel} // Evento ao entrar com o mouse
        onMouseLeave={hidePanel} // Evento ao sair com o mouse
      />

      {/* Painel lateral */}
      <Animated.View
        style={[
          styles.sidePanel,
          {
            transform: [{ translateX: slidePanelAnim }],
            width: panelWidthAnim, // Largura animada
          }
        ]}
      >
        <Text style={styles.totalText}>Total: ${getTotalPrice()}</Text>
        <TouchableOpacity style={styles.clearCartButton} onPress={clearCart}>
          <Text style={styles.clearCartButtonText}>Limpar Carrinho</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Produtos */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {products.map((item, index) => (
          <Animated.View
            key={`${item.id}-${index}`}
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
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.buyButtonText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
