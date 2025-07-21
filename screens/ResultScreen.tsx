import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type RootStackParamList = {
  Home: undefined;
  Scan: undefined;
  Result: { imageUri: string };
};

type ResultScreenProps = NativeStackScreenProps<RootStackParamList, 'Result'>;

export default function ResultScreen({ navigation, route }: ResultScreenProps) {
  // Get image URI from navigation params
  const { imageUri } = route.params || {};
  
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      
      <ScrollView 
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Heading */}
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            Detected: Leaf Curl Disease
          </Text>
          <Text style={styles.confidence}>(91% confidence)</Text>
        </View>

        {/* Image Preview */}
        <View style={styles.imageContainer}>
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              style={styles.previewImage}
              resizeMode="contain"
            />
          ) : (
            <View style={styles.noImageContainer}>
              <Text>No image available</Text>
            </View>
          )}
        </View>

        {/* Disease Info */}
        <View style={styles.infoContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>
              About the Disease
            </Text>
            <Text style={styles.sectionText}>
              Leaf curl disease is caused by viruses that affect chilli crops,
              leading to curling, yellowing, and stunted growth. It reduces
              yield drastically and spreads rapidly.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeading}>
              Symptoms
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Curled and wrinkled leaves</Text>
              <Text style={styles.bulletItem}>• Yellowing between veins</Text>
              <Text style={styles.bulletItem}>• Stunted growth and fewer fruits</Text>
              <Text style={styles.bulletItem}>• Distorted leaf shape</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeading}>
              Immediate Treatment
            </Text>
            <Text style={styles.sectionText}>
              Remove and destroy infected plants. Apply recommended insecticides
              to control whiteflies (common vectors). Neem oil spray may help
              prevent further spread.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeading}>
              Prevention Tips
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Use disease-resistant seeds</Text>
              <Text style={styles.bulletItem}>• Install yellow sticky traps to catch whiteflies</Text>
              <Text style={styles.bulletItem}>• Practice crop rotation</Text>
              <Text style={styles.bulletItem}>• Regular field inspections</Text>
            </View>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.scanAgainButton}
            onPress={() => navigation.navigate('Scan')}
          >
            <MaterialIcons name="refresh" size={20} color="white" />
            <Text style={styles.scanAgainButtonText}>Scan Again</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={() => alert('Result saved successfully!')}
          >
            <MaterialIcons name="save" size={20} color="black" />
            <Text style={styles.saveButtonText}>Save Result</Text>
          </TouchableOpacity>
        </View>
        
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9f2',
  },
  contentContainer: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A400C',
    textAlign: 'center',
  },
  confidence: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  imageContainer: {
    width: '100%',
    maxWidth: 400,
    height: 220,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  previewImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f9f9f9',
  },
  noImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    width: '100%',
    marginBottom: 24,
    margin: 10,
    marginHorizontal: 20,
  },
  section: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0A400C',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  bulletList: {
    marginLeft: 8,
  },
  bulletItem: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 12,
  },
  scanAgainButton: {
    flexDirection: 'row',
    backgroundColor: '#0A400C',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  scanAgainButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: '#b9b56e',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  saveButtonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
});