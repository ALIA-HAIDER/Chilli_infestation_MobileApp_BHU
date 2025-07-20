import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import your BHU logo
// const bhuLogo = require('../assets/bhu-logo.png');

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
interface LinkOpener {
    (url: string): void;
}

const openLink: LinkOpener = (url: string): void => {
    Linking.openURL(url);
};

  return (
    <View style={styles.footer} className='footer'>
      {/* BHU Logo and Title */}
      <View style={styles.section}>
        {/* <Image 
          source={bhuLogo} 
          style={styles.logo} 
          resizeMode="contain"
        /> */}
        <Text style={styles.title}>Banaras Hindu University</Text>
        <Text style={styles.subtitle}>Department of Agriculture</Text>
      </View>

      {/* Project Supervision Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Supervised By</Text>
        <Text style={styles.supervisorText}>
          Prof. Sachchida Nand Chaurasia{'\n'}
          Department of Computer Science{'\n'}
          Banaras Hindu University
        </Text>
      </View>

      {/* Contact & Links */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.contactText}>
          Email: help@cropscan.ai
        </Text>
        
        <View style={styles.socialIcons}>
          <TouchableOpacity 
            onPress={() => openLink('https://linkedin.com')}
            style={styles.iconButton}
          >
            <MaterialCommunityIcons name="linkedin" size={24} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => openLink('https://github.com')}
            style={styles.iconButton}
          >
            <MaterialCommunityIcons name="github" size={24} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => openLink('mailto:help@cropscan.ai')}
            style={styles.iconButton}
          >
            <MaterialCommunityIcons name="email" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Line */}
      <View style={styles.bottomLine}>
        <Text style={styles.copyright}>
          © {currentYear} CropScan AI — A project by BHU Agriculture Department. All rights reserved.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#0A400C',
    padding: 20,
    alignItems: 'center',
  },
  section: {
    marginBottom: 24,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    color: '#cccccc',
    fontSize: 14,
    textAlign: 'center',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  supervisorText: {
    color: '#e0e0e0',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  contactText: {
    color: '#cccccc',
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  iconButton: {
    marginHorizontal: 12,
    padding: 8,
  },
  bottomLine: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
    paddingTop: 16,
    marginTop: 8,
    width: '100%',
  },
  copyright: {
    color: '#999999',
    fontSize: 12,
    textAlign: 'center',
  },
});