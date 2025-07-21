import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground,
  Dimensions 
} from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

// Get screen dimensions for responsive layout
const { width } = Dimensions.get('window');

export default function Header() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  
  // Function to handle Download button press
  const handleDownload = () => {
    alert('App download will be available soon!');
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../assets/imgheader.png')} // Make sure this image exists in your assets folder
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(5, 30, 5, 0.55)', 'rgba(5, 30, 5, 0.95)']}


          style={styles.overlay}
        >
          <View style={styles.content}>
            <Text style={styles.subtitle}>AI-POWERED</Text>
            <Text style={styles.title}>Chilli Disease Detection</Text>
            
            <Text style={styles.description}>
              Instantly identify diseases in your chilli crops with our mobile AI tool. 
              Take a photo and get immediate results and treatment recommendations.
            </Text>
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.scanButton}
                onPress={() => navigation.navigate('Scan' as never)}
              >
                <Text style={styles.scanButtonText}>Scan Now</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.downloadButton}
                onPress={handleDownload}
              >
                <Text style={styles.downloadButtonText}>Download App</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500, // Adjust height as needed
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#E0E0E0',
    fontWeight: '600',
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    maxWidth: 350,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
    gap: 12,
  },
  scanButton: {
    backgroundColor: '#DCDCAA',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  scanButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0A400C',
  },
  downloadButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
    minWidth: 120,
    alignItems: 'center',
  },
  downloadButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
