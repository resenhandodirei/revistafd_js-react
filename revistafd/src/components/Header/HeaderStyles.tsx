import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FF8F00',
    borderBottomColor: '#FFA500',
  },
  containerSmall: {
    padding: 8, // Menos padding em telas menores
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#120A8F',
    marginRight: 80,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap', // Permite que os itens se quebrem em linhas
    justifyContent: 'space-between', // Para distribuir bem os itens
  },
  navContainerSmall: {
    flexDirection: 'column', // Muda para coluna em telas pequenas
    alignItems: 'flex-start',
  },
  navItem: {
    marginHorizontal: 8,
    position: 'relative', // Important for dropdown positioning
    width: windowWidth > 600 ? 'auto' : '100%', // Ajusta a largura para telas menores
  },
  navText: {
    fontSize: 14,
    color: '#120A8F',
  },
  navTextHover: {
    color: '#FFF0DA',
  },
  dropdown: {
    position: 'absolute',
    top: '100%', // Positions directly below the nav item
    left: 0,
    backgroundColor: '#FFF0DA',
    padding: 12,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    borderWidth: 1,
    borderColor: '#FFA500',
    minWidth: '100%', // Ensure sufficient width
    zIndex: 1, // Ensure it appears above other elements
  },
  dropdownGroup: {
    marginBottom: 12,
  },
  dropdownHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF8F00',
    marginBottom: 6,
  },
  dropdownItem: {
    fontSize: 14,
    color: '#120A8F',
    paddingVertical: 4,
  },
  searchInput: {
    height: 30,
    borderColor: '#FFF0DA',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    marginLeft: 16,
    flex: 1,
    maxWidth: 200,
    color: '#FFF0DA',
  },
});

