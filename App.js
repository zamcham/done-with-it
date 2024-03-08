import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Button,
} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Press me" onPress={() => alert('Button pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
