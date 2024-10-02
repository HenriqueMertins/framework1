import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './css/LoginScreenStyle';

export default function LoginScreen({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wrongInput, setWrongInput] = useState(false);

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
            <Text style={styles.title}>Mertins Clothes</Text>
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
            {wrongInput && (<Text style={styles.alertText}>E-mail ou senha incorretos!</Text>)}
            <Button
                title="Entrar"
                color="#333"
                onPress={handleLogin}
            />
        </View>
    );
}

