import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / 4 - 16; // Ajuste para 4 itens por linha com espaçamento

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  productContainer: {
    width: imageSize,
    margin: 8, // Adiciona espaçamento ao redor de cada item
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#444',
    marginTop: 4,
  },
});

export default styles;
