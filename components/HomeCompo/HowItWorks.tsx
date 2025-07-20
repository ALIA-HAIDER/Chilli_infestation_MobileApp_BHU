import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Platform } from 'react-native';

// Import images - use require consistently
const step1 = require('../../assets/Step1.png');
const step2 = require('../../assets/Step2.png');
const step3 = require('../../assets/Step3.png');
const step4 = require('../../assets/Step4.png');

const steps = [
  {
    title: "Step 1: Take a Photo",
    description: "Capture a clear image of your chili plant showing leaves or fruits.",
    image: step1,
  },
  {
    title: "Step 2: Upload / Scan",
    description: "Upload the photo in the app or click Scan Now on the web.",
    image: step2,
  },
  {
    title: "Step 3: Get Instant Results",
    description: "Our AI analyzes the image and shows possible diseases or pests.",
    image: step3,
  },
  {
    title: "Step 4: Follow Recommendations",
    description: "Get treatment tips, preventive care, and expert advice.",
    image: step4,
  },
];

const { width } = Dimensions.get('window');

export default function HowItWorks() {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>How It Works</Text>
        <Text style={styles.subheading}>
          Simple steps to secure your crops using our AI-powered solution.
        </Text>
      </View>

      {/* Steps */}
      <View style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepItem}>
            {/* Image (always on top in mobile) */}
            <View style={styles.imageContainer}>
              <Image
                source={step.image}
                style={styles.stepImage}
                resizeMode="contain"
              />
            </View>

            {/* Text */}
            <View style={styles.textContainer}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDescription}>{step.description}</Text>
            </View>
          </View>
        ))}
      </View>
      
      {/* Extra padding at bottom for scrolling */}
      <View style={{ height: 40 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: 22,
  },
  stepsContainer: {
    width: '100%',
  },
  stepItem: {
    width: '100%',
    marginBottom: 40, // Space between steps
  },
  imageContainer: {
    width: '100%',
    marginBottom: 16,
    // backgroundColor: '#f9f9f9', // Light background for images
    borderRadius: 8,
    overflow: 'hidden',
  },
  stepImage: {
    width: '100%',
    height: width * 0.6, // Responsive height based on screen width
    borderRadius: 8,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 4, // Small padding for text
  },
  stepTitle: {
    fontSize: 20, // Slightly larger
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 16, // Larger for better readability
    color: '#4B5563',
    lineHeight: 24,
  },
});
