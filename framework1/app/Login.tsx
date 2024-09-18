import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState('');                 // Estado para guardar o e-mail conforme está sendo escrito
    const [password, setPassword] = useState('');           // Estado para guardar a senha conforme está sendo escrita
    const [wrongInput, setWrongInput] = useState(false);    // Estado para guardar a validação dos campos e exibir mensagem de erro

    // Função para lidar com o login após o clique no botão
    const handleLogin = () => {
        const validEmail = 'a';
        const validPassword = '1';

        // Verificação do e-mail e senha
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
                onSubmitEditing={handleLogin} // Chama a função handleLogin ao pressionar Enter
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
    alertText: {
        color: 'red',
        marginBottom: 12,
        textAlign: 'center',
    },
});
