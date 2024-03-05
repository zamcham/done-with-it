import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  View,
  SafeAreaView,
  Button,
  Alert,
  Platform,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" onPress={() => Alert.alert("My title", "My string")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
