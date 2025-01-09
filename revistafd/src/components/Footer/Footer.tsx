import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './FooterStyles';
import { CustomButton } from '../CustomButton/CustomButton';


export function Footer() {
  return (
    <View style={styles.container}>
      <Text style={[styles.headerText, {fontWeight: 'bold'}, {fontSize: 16}]}>
        &copy; {new Date().getFullYear()} Faculdade de Direito da Universidade Federal do Ceará
      </Text>
      
      <View style={styles.row}>
        
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Rua Meton de Alencar, s/n - Centro - Fortaleza - CE - CEP 60035-160
          </Text>
          <Text style={styles.text}>
            Tel: +55 (85) 3366 7834 (diretoria)/ 3366-7842 (Coordenação da Graduação)/ 3366-7850 (Pós-Graduação)
          </Text>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
            Rev. Fac. Dir. - ISSN: 0103-2496 (impresso) / 2317-2940 (eletrônico)
          </Text>

          
        </View>

        <View style={styles.textContainerTeam}>
          <Text style={styles.title}>
            Coordenador Técnico
          </Text>
          <Text style={styles.text}>
            Prof. William Paiva Marques Junior
          </Text>
          <Text style={styles.text}>
            E-mail: williamarques.jr@gmail.com
          </Text>
          <Text style={styles.title}>
            T.I
          </Text>
          <Text style={styles.text}>
            Larissa Corrêa
          </Text>
          <Text style={styles.text}>
            E-mail: larissamscorrea@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );
}
