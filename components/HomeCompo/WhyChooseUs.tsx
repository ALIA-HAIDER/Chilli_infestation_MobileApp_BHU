import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function WhyChooseUs() {
  const cards = [
    {
      title: "AI-Powered Precision",
      description: "Our smart detection system uses cutting-edge AI trained on thousands of crop disease images—so you get accurate, instant results just by uploading a photo."
    },
    {
      title: "Made for Indian Farmers",
      description: "From chili to tomato, our tool is built for real field conditions, local crops, and rural connectivity—so every farmer gets relevant, practical solutions."
    },
    {
      title: "Backed by Agricultural Experts",
      description: "Developed in collaboration with top researchers from BHU, our diagnosis engine is guided by real agronomic knowledge, not guesswork."
    },
    {
      title: "Fast, Free & Farmer-Friendly",
      description: "No complicated steps, no cost. Scan your crops instantly and get the help you need without any barriers."
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Heading */}
        <Text style={styles.heading}>
          Why Choose Us?
        </Text>
        
        <Text style={styles.subheading}>
          Trusted by farmers, built with experts, and powered by AI—our tool makes crop disease detection easy, fast, and reliable.
        </Text>

        {/* Cards */}
        <View style={styles.cardsContainer}>
          {cards.map((card, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>
                {card.title}
              </Text>
              <Text style={styles.cardDescription}>
                {card.description}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  content: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0A400C',
    marginBottom: 12,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  cardsContainer: {
    width: '100%',
  },
  card: {
    backgroundColor: '#F9F9F5',
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0A400C',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
});