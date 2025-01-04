import React from 'react';
import { View } from 'react-native';

import { styles } from './HomeStyles';
import { Header } from '../../components/Header/Header';

export function Home() {
  return (
    <View style={styles.container}>
        <Header />
    </View>
  );
}