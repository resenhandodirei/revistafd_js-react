import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './CustomButtonStyles';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export const CustomButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>

    </TouchableOpacity>
  );
};