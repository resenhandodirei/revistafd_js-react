import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './HomeStyles';
import { Header } from '../../components/Header/Header';
import { Pagination } from '../../components/Pagination/Pagination';
import { Footer } from '../../components/Footer/Footer';
import { MenuList } from '../../components/MenuList/MenuList';
import { ButtonFloat } from '../../components/ButtonFloat/ButtonFloat';

export function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Exemplo de total de páginas

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <View style={styles.container}>
      <Header />

      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <Footer />

      <MenuList items={[]} />

      <ButtonFloat />
      
    </View>
  );
}
