import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF0DA',
    borderBottomColor: '#FFA500',
    textTransform: 'uppercase',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA500',
    marginRight: 80,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    marginHorizontal: 8,
    position: 'relative', // Important for dropdown positioning
  },
  navText: {
    fontSize: 14,
    color: '#120A8F',
  },
  navTextHover: {
    color: '#FFA500',
  },
  dropdown: {
    position: 'absolute',
    top: '100%', // Positions directly below the nav item
    left: 0,
    backgroundColor: '#FFF0DA',
    padding: 12,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    borderWidth: 1,
    borderColor: '#FFA500',
    minWidth: 200, // Ensure sufficient width
    zIndex: 1, // Ensure it appears above other elements
  },
  dropdownGroup: {
    marginBottom: 12,
  },
  dropdownHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 6,
  },
  dropdownItem: {
    fontSize: 14,
    color: '#120A8F',
    paddingVertical: 4,
  },
  searchInput: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    marginLeft: 16,
    flex: 1,
    maxWidth: 200,
  },
});
