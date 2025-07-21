import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/HomeCompo/Header';
import HowItWorks from '../components/HomeCompo/HowItWorks';
import TryItNow from '../components/HomeCompo/TryItNow'; // Fixed import path
import WhyChooseUs from '../components/HomeCompo/WhyChooseUs'; // Fixed import path
import Footer from '../components/Footer'; // Fixed import path
import Navbar from '../components/Navbar'; // Fixed import path

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
        <Navbar/>

      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
        alwaysBounceVertical={true}
      >
        <Header />
        
        
        
        <HowItWorks />
        <TryItNow/>
        <WhyChooseUs/>
        <Footer/>
      </ScrollView>
    </SafeAreaView>
  );
}
