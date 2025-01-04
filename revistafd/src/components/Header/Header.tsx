import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './HeaderStyles';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Revista FD</Text>
        <View style={styles.navContainer}>

            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Quem somos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Notícias</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Documentos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Disciplinas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Submissões</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Extensão e pesquisa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Search</Text>
            </TouchableOpacity>

        </View>
    </View>
  );
}
