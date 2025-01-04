import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF0DA', // Off white para o fundo
    borderBottomWidth: 1,
    borderBottomColor: '#FFA500', // Laranja para destacar a separação
    textTransform: 'uppercase',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA500', // Laranja para o logotipo
    marginRight: 80, // Aumentado para maior distanciamento
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    marginHorizontal: 8,
  },
  navText: {
    fontSize: 16,
    color: '#120A8F', // Azul marinho para itens de navegação
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    left: 100,
    backgroundColor: '#FFF0DA', // Off white para o fundo do dropdown
    padding: 12,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    borderWidth: 1,
    borderColor: '#FFA500', // Laranja para borda do dropdown
  },
  dropdownGroup: {
    marginBottom: 12,
  },
  dropdownHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFA500', // Laranja para o cabeçalho de cada grupo
    marginBottom: 6,
  },
  dropdownItem: {
    fontSize: 14,
    color: '#120A8F', // Azul marinho para os itens do dropdown
    paddingVertical: 4,
  },
});
