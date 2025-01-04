import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './HeaderStyles';
import { CustomButton } from '../CustomButton/CustomButton';

export function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleMouseEnter = (item: string) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  const navItems = [
    'Home',
    'Quem somos',
    'Notícias',
    'Documentos',
    'Disciplina',
    'Submissões',
    'Extensão e pesquisa',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Revista da Faculdade de Direito da UFC</Text>
      <View style={styles.navContainer}>
        {navItems.map((item, index) => (
          <View
            key={index}
            style={styles.navItem}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <Text
              style={[
                styles.navText,
                hoveredItem === item && styles.navTextHover,
              ]}
            >
              {item}
            </Text>
            {item === 'Quem somos' && hoveredItem === item && (
              <View style={styles.dropdown}>
                <View style={styles.dropdownGroup}>
                  <Text style={styles.dropdownHeader}>Equipe</Text>
                  <Text style={styles.dropdownItem}>Contato</Text>
                  <Text style={styles.dropdownItem}>Equipe Editorial</Text>
                  <Text style={styles.dropdownItem}>Coordenador</Text>
                </View>
                <View style={styles.dropdownGroup}>
                  <Text style={styles.dropdownHeader}>Políticas</Text>
                  <Text style={styles.dropdownItem}>Políticas de Seção</Text>
                  <Text style={styles.dropdownItem}>Processo de Avaliação pelos Pares</Text>
                  <Text style={styles.dropdownItem}>Periodicidade</Text>
                  <Text style={styles.dropdownItem}>Política de Acesso Livre</Text>
                  <Text style={styles.dropdownItem}>Arquivamento</Text>
                </View>
                <View style={styles.dropdownGroup}>
                  <Text style={styles.dropdownHeader}>Outros</Text>
                  <Text style={styles.dropdownItem}>Mapa do Portal</Text>
                  <Text style={styles.dropdownItem}>Sobre este sistema de publicação</Text>
                </View>
              </View>
            )}
          </View>
        ))}
        {/* Search input */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <CustomButton title={'Login'} onPress={function (): void {
              throw new Error('Function not implemented.');
          } } />

    <CustomButton title={'Cadastro'} onPress={function (): void {
              throw new Error('Function not implemented.');
          } } />
    </View>
  );
}
