// import { ScreenContent } from 'components/ScreenContent';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import './global.css';
import HomeScreen from 'screens/HomeScreen';
import ScanScreen from 'screens/ScanScreen';
import ResultScreen from 'screens/ResultScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
      
      {/* <ScanScreen/> */}
      {/* <ResultScreen/> */}
    </SafeAreaProvider>
  );
}
