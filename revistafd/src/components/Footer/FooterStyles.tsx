import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF8F00', // Laranja predominante
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  text: {
    color: '#FFF0DA', // Off white para o texto
    fontSize: 14,
    marginBottom: 8,
  },
  textContainer: {
    flex: 2,
    paddingRight: 10, // Espaçamento entre os blocos
  },
  textContainerTeam: {
    flex: 2,
    paddingLeft: 10, // Espaçamento entre os blocos
  },
  title: {
    color: '#FFF0DA',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Alinhamento superior
    justifyContent: 'space-between',
    width: '100%',
  },
  headerText: {
    color: '#FFF0DA', // Off white para o texto
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
