import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const BuyScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePurchase = () => {
    if (name && email && address && contact && cardNumber && expiryDate && cvv) {
      Alert.alert('Compra finalizada com sucesso!');
    } else {
      Alert.alert('Por favor, preencha todos os campos.');
    }
  };
  const handleContactChange = (value: string) => {
    const formattedContact = value.replace(/\D/g, '').replace(/(\d{5})(\d{4})/, '$1-$2');
    setContact(formattedContact);
  };
  const handleCardNumberChange = (value: string) => {
    const formattedCardNumber = value
      .replace(/\D/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1-')
      .slice(0, 19); 
    setCardNumber(formattedCardNumber);
  };
  const handleExpiryDateChange = (value: string) => {
    const formattedExpiryDate = value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{2})/, '$1/$2')
      .slice(0, 5); 
    setExpiryDate(formattedExpiryDate);
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Finalizar Compra</Text>

      <Text style={styles.label}>Nome Completo</Text>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={setName} 
        placeholder="Digite seu nome completo" 
      />
      <Text style={styles.label}>E-mail</Text>
      <TextInput 
        style={styles.input} 
        value={email} 
        onChangeText={setEmail} 
        placeholder="Digite seu e-mail" 
        keyboardType="email-address"
      />
      <Text style={styles.label}>Endereço</Text>
      <TextInput 
        style={styles.input} 
        value={address} 
        onChangeText={setAddress} 
        placeholder="Digite seu endereço" 
      />
      <Text style={styles.label}>Contato</Text>
      <TextInput 
        style={styles.input} 
        value={contact} 
        onChangeText={handleContactChange} 
        placeholder="Digite seu telefone " 
        keyboardType="numeric" 
        maxLength={10} 
      />
      <Text style={styles.label}>Número do Cartão</Text>
      <TextInput 
        style={styles.input} 
        value={cardNumber} 
        onChangeText={handleCardNumberChange} 
        placeholder="Digite o número do cartão " 
        keyboardType="numeric" 
        maxLength={19} 
      />
      <View style={styles.cardRow}>
        <View style={styles.cardSection}>
          <Text style={styles.label}>Data de Validade</Text>
          <TextInput 
            style={styles.input} 
            value={expiryDate} 
            onChangeText={handleExpiryDateChange} 
            placeholder="MM/AA" 
            keyboardType="numeric" 
            maxLength={5} 
          />
        </View>
        <View style={styles.cardSection}>
          <Text style={styles.label}>CVV</Text>
          <TextInput 
            style={styles.input} 
            value={cvv} 
            onChangeText={setCvv} 
            placeholder="CVV" 
            keyboardType="numeric" 
            maxLength={3} 
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePurchase}>
          <Text style={styles.buttonText}>Finalizar Compra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Voltar para Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardSection: {
    flex: 1,
    marginRight: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BuyScreen;
