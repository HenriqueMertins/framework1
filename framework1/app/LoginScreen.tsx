import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import styles from './css/LoginScreenStyle';

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongInput, setWrongInput] = useState(false);

  // Valores de animação
  const translateXTitle = useSharedValue(-300);
  const translateXInput = useSharedValue(-300);
  const translateXButton = useSharedValue(-300);
  const opacityTitle = useSharedValue(0);
  const opacityInput = useSharedValue(0);
  const opacityButton = useSharedValue(0);

  // Carregar o e-mail salvo ao iniciar a tela
  useEffect(() => {
    const loadStoredCredentials = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('userEmail');
        const storedPassword = await AsyncStorage.getItem('userPassword');

        // Log para verificar se os dados foram carregados corretamente
        console.log('Stored Email:', storedEmail);
        console.log('Stored Password:', storedPassword);

        if (storedEmail) {
          setEmail(storedEmail); // Define o e-mail carregado no campo
        }
      } catch (error) {
        console.error('Erro ao carregar as credenciais:', error);
      }
    };

    loadStoredCredentials();

    // Animações
    translateXTitle.value = withTiming(0, { duration: 500 });
    opacityTitle.value = withTiming(1, { duration: 500 });

    translateXInput.value = withTiming(0, { duration: 500});
    opacityInput.value = withTiming(1, { duration: 500});

    translateXButton.value = withTiming(0, { duration: 500});
    opacityButton.value = withTiming(1, { duration: 500});
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

  // Função de login
  const handleLogin = async () => {
    try {
      // Recupera os dados armazenados no AsyncStorage
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');

      // Log para verificar os dados de entrada e os armazenados
      console.log('Input Email:', email);
      console.log('Input Password:', password);
      console.log('Stored Email:', storedEmail);
      console.log('Stored Password:', storedPassword);

      // Verifica se os dados inseridos correspondem aos armazenados
      if (email === storedEmail && password === storedPassword) {
        // Navega para a tela Home se o login for bem-sucedido
        navigation.navigate('Home', { email });
      } else {
        setWrongInput(true); // Mostra mensagem de erro se o login falhar
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao realizar o login. Tente novamente.');
    }
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Register'); // Navega para a tela de registro
  };

  return (
    <View style={styles.container}>
      <Animated.View style={animatedTitleStyle}>
        <Text style={styles.title}>Mertins Clothes</Text>
      </Animated.View>

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
          onSubmitEditing={handleLogin}
        />
      </Animated.View>

      {wrongInput && (
        <Text style={styles.alertText}>E-mail ou senha incorretos!</Text>
      )}

      <View style={styles.buttonContainer}>
        <Animated.View style={animatedButtonStyle}>
          <Button
            title="Login"
            color="#333"
            onPress={handleLogin}
          />
        </Animated.View>
        <Animated.View style={animatedButtonStyle}>
          <Button
            title="Registrar"
            color="#333"
            onPress={handleNavigateToRegister}
          />
        </Animated.View>
      </View>
    </View>
  );
}
