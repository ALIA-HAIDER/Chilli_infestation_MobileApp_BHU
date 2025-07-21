import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

// Import image using require
const plantScan = require('../../assets/tryitnowimg.png');

export default function TryItNow() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Image - Always visible on mobile */}
        <View style={styles.imageContainer}>
          <Image
            source={plantScan}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            Try It Now — Instant Crop Scan
          </Text>
          
          <Text style={styles.paragraph}>
            Just take a photo of your plant and find out if it's healthy or at risk.
          </Text>
          
          <Text style={styles.paragraph}>
            No waiting, no guesswork — quick results at your fingertips.
          </Text>
          
          <Text style={styles.joinText}>
            Join the Action —
          </Text>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Scan')}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              Scan Your Plant
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  content: {
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A400C',
    textAlign: 'center',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 22,
  },
  joinText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0A400C',
    marginTop: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#B1AB86',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  buttonText: {
    color: '#0A400C',
    fontWeight: 'bold',
    fontSize: 16,
  },
});