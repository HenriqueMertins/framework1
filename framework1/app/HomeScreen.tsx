import React, { useRef, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Animated } from 'react-native';
import styles from './css/HomeScreenSyle';

const data = [
  { id: '1', name: 'Camiseta Básica', price: 'R$ 49,90', image: require('@/assets/images/camiseta.png') },
  { id: '2', name: 'Calça Jeans', price: 'R$ 89,90', image: require('@/assets/images/calca.png') },
  { id: '3', name: 'Jaqueta de Couro', price: 'R$ 199,90', image: require('@/assets/images/jaqueta.png') },
  { id: '4', name: 'Tênis Esportivo', price: 'R$ 149,90', image: require('@/assets/images/tenis.png') },
];

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current; 
  useEffect(() => {
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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mertins Clothes</Text>
        <TouchableOpacity style={styles.cartIcon} onPress={() => navigation.navigate('Buy')}>
          <Text style={styles.cartIconText}>🛒</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {data.map((item, index) => (
          <Animated.View
            key={item.id}
            style={[
              styles.itemBox,
              {
                opacity: fadeAnim, 
                transform: [{ translateY: slideAnim }]
              }
            ]}
          >
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Comprar</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
