import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Platform,
  Animated
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createShadow } from './shared/CrossPlatformShadow';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [menuAnimation] = useState(new Animated.Value(0));
  const insets = useSafeAreaInsets();
  
  const toggleMenu = () => {
    const toValue = isMenuOpen ? 0 : 1;
    
    Animated.timing(menuAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: false // Changed to false
    }).start();
    
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    alert('App download will be available soon!');
  };

  const menuHeight = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300] as any
  });

  return (
    <View>
      {/* Main Navbar - adjusted for safe areas */}
      <View style={[styles.navbar, { paddingTop: insets.top }]}>
        {/* Left: Logos */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>CropScan AI</Text>
        </View>

        {/* Right: Menu Button */}
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Feather name={isMenuOpen ? "x" : "menu"} size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Mobile Menu Dropdown */}
      <Animated.View 
        style={[
          styles.menuDropdown,
          { 
            maxHeight: menuHeight,
            opacity: menuAnimation,
            // Removed the transform that uses interpolate with native driver
          }
        ]}
      >
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => {
            // @ts-ignore
            navigation.navigate('Home');
            toggleMenu();
          }}
        >
          <Text style={styles.menuItemText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => {
            // @ts-ignore
            navigation.navigate('Scan');
            toggleMenu();
          }}
        >
          <Text style={styles.menuItemText}>Scan Now</Text>
        </TouchableOpacity>
        
        {/* Added About page link */}
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => {
            // @ts-ignore
            navigation.navigate('About');
            toggleMenu();
          }}
        >
          <Text style={styles.menuItemText}>About</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.downloadButton}
          onPress={handleDownload}
        >
          <Text style={styles.downloadButtonText}>Download App</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 50,
    ...createShadow(4), // Using cross-platform shadow
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A400C',
  },
  menuButton: {
    padding: 8,
  },
  menuDropdown: {
    backgroundColor: 'white',
    overflow: 'hidden',
    zIndex: 40,
    ...createShadow(6), // Using cross-platform shadow
  },
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  downloadButton: {
    backgroundColor: '#0A400C',
    marginVertical: 12,
    marginHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});