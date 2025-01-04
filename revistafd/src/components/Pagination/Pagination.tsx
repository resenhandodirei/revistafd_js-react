import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './PaginationStyles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity onPress={handlePrevPage} style={styles.pageButton} disabled={currentPage === 1}>
        <Text style={styles.pageText}>Prev</Text>
      </TouchableOpacity>

      <Text style={styles.pageInfo}>
        {currentPage} de {totalPages}
      </Text>

      <TouchableOpacity onPress={handleNextPage} style={styles.pageButton} disabled={currentPage === totalPages}>
        <Text style={styles.pageText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
