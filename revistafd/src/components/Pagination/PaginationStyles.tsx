import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF0DA', // Off white para o fundo
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFA500', // Laranja para a borda
  },
  pageButton: {
    backgroundColor: '#FFA500', // Laranja para os botões
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    cursor: 'pointer',
    opacity: 1,
  },
  pageButtonDisabled: {
    backgroundColor: '#D3D3D3', // Cinza para desabilitar o botão
    // cursor: 'not-allowed',
  },
  pageText: {
    color: '#FFF', // Texto branco para os botões
    fontWeight: 'bold',
    fontSize: 16,
  },
  pageInfo: {
    color: '#120A8F', // Azul marinho para o texto de informação da página
    fontSize: 16,
    fontWeight: 'bold',
  },
});
