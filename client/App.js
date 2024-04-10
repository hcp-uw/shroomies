import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import { StaticServer } from 'react-native-static-server';
// require('../src/app.js');

// Import your HomeScreen component
//import HomeScreen from './src/HomeScreen';
import HomeScreenMVP from './src/HomeScreenMVP';
import AboutPageMVP from './src/AboutPageMVP';
import Results from './src/Results';

const Stack = createStackNavigator();

const App = () => {
  const [image, setImage] = useState(null);
  const [poisonous, setPoisonous] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: '#FFF2E9' }, // Set the background color for the entire screen
        }}
      >
        <Stack.Screen
          
          name="HomeScreen"
          component={(nav) => HomeScreenMVP({nav, setImage, setPoisonous})}
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
        <Stack.Screen
          name="Results"
          component={(nav) => Results({nav, image, poisonous})}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
