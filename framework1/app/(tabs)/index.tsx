import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const data = [
    { id: '1', name: 'Camiseta Básica', price: 'R$ 49,90', image: require('@/assets/images/camiseta.png') },
    { id: '2', name: 'Calça Jeans', price: 'R$ 89,90', image: require('@/assets/images/calca.png') },
    { id: '3', name: 'Jaqueta de Couro', price: 'R$ 199,90', image: require('@/assets/images/jaqueta.png') },
    { id: '4', name: 'Tênis Esportivo', price: 'R$ 149,90', image: require('@/assets/images/tenis.png') },
    // { id: '5', name: 'Camiseta Polo', price: 'R$ 59,90', image: require('@/assets/images/polo.png') },
    // { id: '6', name: 'Bermuda', price: 'R$ 79,90', image: require('@/assets/images/bermuda.png') },
    // { id: '7', name: 'Casaco Moletom', price: 'R$ 129,90', image: require('@/assets/images/moletom.png') },
    // { id: '8', name: 'Boné', price: 'R$ 39,90', image: require('@/assets/images/bone.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mertins Clothes</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemBox}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        numColumns={4}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.boxContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#1c1c1c',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  boxContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  itemBox: {
    backgroundColor: '#1c1c1c',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '22%',  // Ajusta para caber quatro por linha
  },
  itemImage: {
    width: 225,  // Aumenta a largura da imagem
    height: 225, // Aumenta a altura da imagem
    marginBottom: 8,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 12,
    color: '#ccc',
    textAlign: 'center',
  },
});
