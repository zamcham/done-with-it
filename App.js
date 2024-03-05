import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  View,
  SafeAreaView
} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text pressed');

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello World!</Text>
      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',

          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
