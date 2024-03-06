import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library.');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
