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
});
