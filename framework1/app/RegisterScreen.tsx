import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import styles from './css/RegisterScreenStyle'; // Certifique-se de criar esse arquivo de estilos

export default function RegisterScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Valores de animação
  const translateXTitle = useSharedValue(-300);
  const translateXInput = useSharedValue(-300);
  const translateXButton = useSharedValue(-300);
  const opacityTitle = useSharedValue(0);
  const opacityInput = useSharedValue(0);
  const opacityButton = useSharedValue(0);

  // Animação ao carregar a tela
  useEffect(() => {
    translateXTitle.value = withTiming(0, { duration: 500 });
    opacityTitle.value = withTiming(1, { duration: 500 });

    translateXInput.value = withTiming(0, { duration: 500, delay: 100 });
    opacityInput.value = withTiming(1, { duration: 500, delay: 100 });

    translateXButton.value = withTiming(0, { duration: 500, delay: 200 });
    opacityButton.value = withTiming(1, { duration: 500, delay: 200 });
  }, []);

  // Estilos animados
  const animatedTitleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateXTitle.value }],
    opacity: opacityTitle.value,
  }));

  const animatedInputStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateXInput.value }],
    opacity: opacityInput.value,
  }));

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateXButton.value }],
    opacity: opacityButton.value,
  }));

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      // Salvando o e-mail e a senha no AsyncStorage
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);

      Alert.alert('Sucesso', 'Registro realizado com sucesso!');
      navigation.navigate('Login'); // Navega de volta para a tela de login após o registro
    } catch (error) {
      Alert.alert('Erro', 'Falha ao registrar. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={animatedTitleStyle}>
        <Text style={styles.title}>Registrar</Text>
      </Animated.View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Animated.View style={animatedInputStyle}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          placeholderTextColor="#ccc"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </Animated.View>

      <Animated.View style={animatedButtonStyle}>
        <Button
          title="Registrar"
          color="#333"
          onPress={handleRegister}
        />
      </Animated.View>
    </View>
  );
}
