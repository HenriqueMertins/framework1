import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BuyScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      {/* Aqui você pode adicionar a lógica para mostrar os itens selecionados */}
      <Button 
        title="Finalizar Compra" 
        onPress={() => alert('Compra finalizada!')} 
        color="#333"
      />
      <Button 
        title="Voltar para Home" 
        onPress={() => navigation.navigate('Home')} 
        color="#666"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
});

export default BuyScreen;
