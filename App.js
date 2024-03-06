import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={StyleSheet.container}>
        <Text style={{
          color: 'white',
          fontSize: 30,
          textAlign: 'center',
          lineHeight: 70,
        }}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
