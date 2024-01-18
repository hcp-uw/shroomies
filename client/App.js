import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SomeComponent from './src/SomeComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is me testing how to use Expo Go!</Text>
      <StatusBar style="auto" />
      <SomeComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});