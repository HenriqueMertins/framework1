import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from './css/BuyScreenStyle';

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
        placeholder="Digite seu número do cartão" 
        keyboardType="numeric" 
        maxLength={19} 
      />
      <View style={styles.cardRow}>
        <View style={styles.cardColumn}>
          <Text style={styles.label}>Validade</Text>
          <TextInput 
            style={styles.input} 
            value={expiryDate} 
            onChangeText={handleExpiryDateChange} 
            placeholder="MM/AA" 
            keyboardType="numeric" 
            maxLength={5} 
          />
        </View>
        <View style={styles.cardColumn}>
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
      <TouchableOpacity style={styles.buyButton} onPress={handlePurchase}>
        <Text style={styles.buyButtonText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default BuyScreen;
