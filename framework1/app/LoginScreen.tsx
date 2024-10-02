import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
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

  const handleLogin = () => {
    const validEmail = 'a';
    const validPassword = '1';
    if (email === validEmail && password === validPassword) {
      navigation.navigate('Home', { email });
    } else {
      setWrongInput(true);
    }
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

      <Animated.View style={animatedButtonStyle}>
        <Button
          title="Entrar"
          color="#333"
          onPress={handleLogin}
        />
      </Animated.View>
    </View>
  );
}
