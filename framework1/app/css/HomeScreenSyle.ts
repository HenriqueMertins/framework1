import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = (width - 40) / 2; // Cálculo dinâmico para largura dos itens

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#333',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartIcon: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 5,
  },
  cartIconText: {
    color: '#fff',
    fontSize: 24,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  itemBox: {
    width: itemWidth, 
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: 150, // Altura adequada para manter proporção
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  itemName: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    padding: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
    marginLeft: 10,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
});
