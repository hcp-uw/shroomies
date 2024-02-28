import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StaticServer } from 'react-native-static-server';
// require('../src/app.js');

// Import your HomeScreen component
//import HomeScreen from './src/HomeScreen';
import HomeScreenMVP from './src/HomeScreenMVP';
import AboutPageMVP from './src/AboutPageMVP';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: '#FFF2E9' }, // Set the background color for the entire screen
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreenMVP}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AboutPage"
          component={AboutPageMVP}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
