import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const handleLogin = () => {
    // Simulação de login bem-sucedido
    onLoginSuccess();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mertins Clothes</Text>
      <TextInput 
        placeholder="Login" 
        placeholderTextColor="#555" 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Senha" 
        placeholderTextColor="#555" 
        secureTextEntry={true} 
        style={styles.input} 
      />
      <Button 
        title="Entrar" 
        color="#333" 
        onPress={handleLogin} 
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
    fontSize: 30,
    color: '#333',
    marginBottom: 40,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#333',
  },
});

export default LoginScreen;
