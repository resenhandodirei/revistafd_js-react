import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
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
    color: '#007bff',
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    left: 100,
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  dropdownGroup: {
    marginBottom: 12,
  },
  dropdownHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 6,
  },
  dropdownItem: {
    fontSize: 14,
    color: '#6c757d',
    paddingVertical: 4,
  },
});
