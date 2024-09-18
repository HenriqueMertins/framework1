import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', name: 'Camiseta Básica', price: 'R$ 49,90', image: require('@/assets/images/camiseta.png') },
  { id: '2', name: 'Calça Jeans', price: 'R$ 89,90', image: require('@/assets/images/calca.png') },
  { id: '3', name: 'Jaqueta de Couro', price: 'R$ 199,90', image: require('@/assets/images/jaqueta.png') },
  { id: '4', name: 'Tênis Esportivo', price: 'R$ 149,90', image: require('@/assets/images/tenis.png') },
  // Adicione mais itens conforme necessário
];

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mertins Clothes</Text>
        
        {/* Ícone do carrinho com navegação para a tela Buy */}
        <TouchableOpacity style={styles.cartIcon} onPress={() => navigation.navigate('Buy')}>
          <Text style={styles.cartIconText}>🛒</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.gridContainer}>
        {data.map((item) => (
          <View key={item.id} style={styles.itemBox}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Comprar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#333',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
  },
  cartIcon: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 5,
  },
  cartIconText: {
    color: '#fff',
    fontSize: 24,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  itemBox: {
    width: '22%', 
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 170,
    height: 170,
    marginBottom: 16,
  },
  itemName: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default HomeScreen;
