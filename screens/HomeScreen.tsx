import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/HomeCompo/Header';
import HowItWorks from '../components/HomeCompo/HowItWorks';
import TryItNow from '../components/HomeCompo/TryItNow';
import WhyChooseUs from '../components/HomeCompo/WhyChooseUs';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f9f2' }}>
      <StatusBar barStyle="light-content" />

      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={true}
      >
        <Header />
        <HowItWorks />
        <TryItNow/>
        <WhyChooseUs/>
      </ScrollView>
    </SafeAreaView>
  );
}
