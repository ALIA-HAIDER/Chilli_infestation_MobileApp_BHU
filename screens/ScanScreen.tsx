import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Alert,
  ActivityIndicator,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export default function ScanScreen({ }) {
  const [image, setImage] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  useEffect(() => {
    (async () => {
      // Request camera and media library permissions
      if (Platform.OS !== 'web') {
        const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
        const { status: libraryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (cameraStatus !== 'granted' || libraryStatus !== 'granted') {
          Alert.alert(
            'Permissions Required',
            'Please grant camera and media library permissions to use this feature.',
            [{ text: 'OK' }]
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!image) {
      Alert.alert('No Image', 'Please select or capture an image first.');
      return;
    }

    setAnalyzing(true);
    
    // Simulate analysis (replace with actual API call)
    setTimeout(() => {
      setAnalyzing(false);
    //   navigation.navigate('Result');
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
        \
      <StatusBar style="dark" />

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chilli Disease Detection</Text>
        <Text style={styles.subtitle}>
          Upload an image of your chilli plant and get instant AI-powered analysis for diseases and pest infestations.
        </Text>
      </View>

      {/* Image Preview Area */}
      <View style={styles.uploadContainer}>
        {image ? (
          <View style={styles.previewContainer}>
            <Image
              source={{ uri: image }}
              style={styles.previewImage}
              resizeMode="contain"
            />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => setImage(null)}
            >
              <Text style={styles.removeButtonText}>×</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.placeholderContainer}>
            <MaterialIcons name="image" size={60} color="#0A400C" style={{ opacity: 0.6 }} />
            <Text style={styles.placeholderTitle}>Upload Chilli Leaf Image</Text>
            <Text style={styles.placeholderSubtitle}>
              Take a photo or select from gallery
            </Text>
          </View>
        )}
      </View>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.galleryButton}
          onPress={pickImage}
        >
          <MaterialCommunityIcons name="folder-image" size={22} color="black" />
          <Text style={styles.buttonText}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cameraButton}
          onPress={takePhoto}
        >
          <MaterialIcons name="camera-alt" size={22} color="white" />
          <Text style={styles.cameraButtonText}>Camera</Text>
        </TouchableOpacity>
      </View>

      {/* Submit */}
      <View style={styles.submitContainer}>
        {image && !analyzing && (
          <View style={styles.readyIndicator}>
            <Text style={styles.readyText}>Ready to analyze your image</Text>
          </View>
        )}
        
        <TouchableOpacity
          style={[
            styles.submitButton,
            (!image || analyzing) && styles.disabledButton
          ]}
          onPress={handleSubmit}
          disabled={!image || analyzing}
        >
          {analyzing ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.submitButtonText}>
              {image ? "Analyze for Diseases" : "Upload Image to Continue"}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9f2',
    padding: 16,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A400C',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    maxWidth: '90%',
  },
  uploadContainer: {
    width: '100%',
    height: 280,
    borderWidth: 2,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    marginBottom: 24,
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  placeholderTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#0A400C',
    marginTop: 12,
  },
  placeholderSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  previewContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  previewImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 24,
  },
  galleryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dcdcaa',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cameraButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a4a4a',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  cameraButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  submitContainer: {
    alignItems: 'center',
  },
  readyIndicator: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  readyText: {
    fontSize: 14,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#0A400C',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});