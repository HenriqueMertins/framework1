// css/ApiScreenStyle.ts
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / 3 - 16; // Divide a largura da tela por 3 e ajusta o espaçamento

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
  imageContainer: {
    width: imageSize,
    height: imageSize,
    marginBottom: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
