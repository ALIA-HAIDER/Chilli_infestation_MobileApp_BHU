import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const imgheader = require('../../assets/imgheader.png');
const { width, height } = Dimensions.get('window');

function Header() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={imgheader}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Dark Overlay - makes text more readable */}
      <View style={styles.overlay} />

      {/* Content */}
      <View style={[styles.contentContainer, { paddingTop: insets.top }]}>
        <Text style={styles.heading}>
          Empowering Farmers, Protecting Crops
        </Text>
        
        <Text style={styles.subheading}>
          Scan and protect your crops with advanced chili disease detection.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.6, // 60% of screen height for better proportion
    backgroundColor: 'black',
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)', // Darker overlay for better text contrast
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24, // Increased padding
    maxWidth: 600, // Max width for better readability on larger devices
    alignSelf: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 32, // Larger font size
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16, // More space below heading
    lineHeight: 40, // Better line height for readability
    letterSpacing: 0.5, // Slight letter spacing for better appearance
  },
  subheading: {
    color: 'white',
    fontSize: 18, // Larger subheading
    textAlign: 'center',
    marginBottom: 28, // More space below
    lineHeight: 24, // Better line height
    fontWeight: '400', // Slightly bolder than normal
    opacity: 0.9, // Slightly transparent for visual hierarchy
  },
});

export default Header;
