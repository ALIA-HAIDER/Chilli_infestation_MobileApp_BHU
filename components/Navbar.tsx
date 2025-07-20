import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  StatusBar,
  Platform,
  Animated
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigation = useNavigation();
  const [menuAnimation] = useState(new Animated.Value(0));
  
  const toggleMenu = () => {
    const toValue = isMenuOpen ? 0 : 1;
    
    Animated.timing(menuAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: true
    }).start();
    
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    // Placeholder for app download functionality
    alert('App download will be available soon!');
  };

  const menuHeight = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200] // Adjust height as needed
  });

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Main Navbar */}
      <View style={styles.navbar}>
        {/* Left: Logos */}
        <View style={styles.logoContainer}>
          {/* <Image source={require('../assets/logo1.png')} style={styles.logo} />
          <Image source={require('../assets/logo2.png')} style={styles.logo} />
          <Image source={require('../assets/logo3.png')} style={styles.logo} /> */}
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
            transform: [{
              translateY: menuAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [-20, 0]
              })
            }]
          }
        ]}
      >
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => {
            // navigation.navigate('Home');
            toggleMenu();
          }}
        >
          <Text style={styles.menuItemText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => {
            // You'd need to implement scroll to section functionality
            toggleMenu();
          }}
        >
          <Text style={styles.menuItemText}>How it Works</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => {
            // navigation.navigate('Scan');
            toggleMenu();
          }}
        >
          <Text style={styles.menuItemText}>Scan Now</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => {
            // navigation.navigate('About');
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
    </>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    position: 'relative',
    zIndex: 50,
    paddingTop: Platform.OS === 'ios' ? 44 : 12, // Adjust for iOS status bar
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 32,
    width: 32,
    marginRight: 8,
  },
  menuButton: {
    padding: 8,
  },
  menuDropdown: {
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 40,
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