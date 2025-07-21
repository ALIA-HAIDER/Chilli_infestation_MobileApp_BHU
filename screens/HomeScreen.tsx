import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/HomeCompo/Header';
import HowItWorks from '../components/HomeCompo/HowItWorks';
import TryItNow from '../components/HomeCompo/TryItNow';
import WhyChooseUs from '../components/HomeCompo/WhyChooseUs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9f2' }}>
      <StatusBar barStyle="light-content" />
        <Navbar/>

      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 0 }} // Changed from 40 to 0
        showsVerticalScrollIndicator={true}
      >
        <Header />
        
        
        
        <HowItWorks />
        <TryItNow/>
        <WhyChooseUs/>
        <Footer/>
      </ScrollView>
    </View>
  );
}
