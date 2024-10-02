import { StyleSheet } from 'react-native';

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
    width: '22%',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 170,
    height: 170,
    marginBottom: 16,
  },
  itemName: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});
