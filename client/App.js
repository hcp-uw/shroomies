import React from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SomeComponent from './src/SomeComponent';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to My React Native App!</Text>
    <Text>This is me testing how to use Expo Go!</Text>
    <SomeComponent />
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('SecondScreen')}
    >
      <Text style={styles.buttonText}>Go to Second Screen</Text>
    </TouchableOpacity>
    <StatusBar style="auto" />
  </View>
);

const SecondScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Second Screen</Text>
    <Text>This is the second screen content.</Text>
  </View>
);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
