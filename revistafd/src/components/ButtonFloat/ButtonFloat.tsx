import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './ButtonFloatStyles';

export const ButtonFloat: React.FC = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [isAtTop, setIsAtTop] = useState(true);

  const handlePress = () => {
    scrollY.stopAnimation(value => {
      if (isAtTop) {
        scrollY.setValue(value); // Set current scroll position
        scrollY.flattenOffset(); // Prevent jumping
        Animated.timing(scrollY, {
          toValue: 1000, // Adjust this value according to your content length
          duration: 500,
          useNativeDriver: false,
        }).start(() => setIsAtTop(false));
      } else {
        Animated.timing(scrollY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start(() => setIsAtTop(true));
      }
    });
  };

  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      setIsAtTop(value <= 0);
    });

    return () => {
      scrollY.removeListener(listener);
    };
  }, [scrollY]);

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={16}
      >
        {/* Replace with your content */}
        {/*<Text style={styles.content}>Scroll down for more content...</Text>
        <Text style={styles.content}>Content at the bottom of the page.</Text> */}
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{isAtTop ? 'Go to Bottom' : 'Go to Top'}</Text>
      </TouchableOpacity>
    </>
  );
};
