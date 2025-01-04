import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './HeaderStyles';

export function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Revista FD</Text>
        <View style={styles.navContainer}>

            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={toggleDropdown}>
                <Text style={styles.navText}>Quem somos</Text>
            </TouchableOpacity>
            {showDropdown && (
            <View style={styles.dropdown}>
                <View style={styles.dropdownGroup}>
                    <Text style={styles.dropdownHeader}>Equipe:</Text>
                    <Text style={styles.dropdownItem}>Contato</Text>
                    <Text style={styles.dropdownItem}>Equipe Editorial</Text>
                    <Text style={styles.dropdownItem}>Coordenador</Text>
                </View>
                <View style={styles.dropdownGroup}>
                    <Text style={styles.dropdownHeader}>Políticas:</Text>
                    <Text style={styles.dropdownItem}>Políticas de Seção</Text>
                    <Text style={styles.dropdownItem}>Processo de Avaliação pelos Pares</Text>
                    <Text style={styles.dropdownItem}>Periodicidade</Text>
                    <Text style={styles.dropdownItem}>Política de Acesso Livre</Text>
                    <Text style={styles.dropdownItem}>Arquivamento</Text>
                </View>

                <View style={styles.dropdownGroup}>
                    <Text style={styles.dropdownHeader}>Outros:</Text>
                    <Text style={styles.dropdownItem}>Mapa do Portal</Text>
                    <Text style={styles.dropdownItem}>Sobre este sistema de publicação</Text>
                </View>
            </View>
            )}
            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Notícias</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Documentos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Disciplina</Text>
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

