import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
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
