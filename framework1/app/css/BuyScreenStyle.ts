import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 15,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardColumn: {
    width: '48%',
  },
  buyButton: {
    backgroundColor: '#333',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
