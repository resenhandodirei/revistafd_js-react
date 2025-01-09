import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './MenuListStyles';

type MenuItem = {
  title: string;
  onPress: () => void;
};

type MenuListProps = {
  items: MenuItem[];
};

export const MenuList: React.FC<MenuListProps> = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem} onPress={item.onPress}>
          <Text style={styles.menuText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
