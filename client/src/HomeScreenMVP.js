import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const HomeScreenMVP = () => {
  const [searchText, setSearchText] = useState('');

  const launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        console.log('response', JSON.stringify(response));
        this.setState({
          fileUri: response.assets[0].uri,
        });
      }
    });
  };

  return (
    <LinearGradient
      colors={['#EE9E62', '#576F3D']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Fungi Find</Text>
        <Text style={styles.subtitle}>Scan your mushroom to identify!</Text>
        <View style={styles.horizIconContainer}>
          <Image
            source={require('../assets/camera-fungifind 1.png')}
            style={styles.rotatedIcon15}
          />
          <Image
            source={require('../assets/shroomies vector icon 1.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            onFocus={() => setSearchText('')}
          />
          <Text style={styles.searchText}>Search</Text>
        </View>
        
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onFocus={() => setSearchText('')}
        />
        <Text style={styles.searchText}>Search</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={this.launchCamera}
          style={styles.button}>
          <Text style={styles.buttonText}>Scan Mushroom</Text>
        </TouchableOpacity>
      </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#772F1A',
    fontFamily: "Lato",
  },
  subtitle: {
    fontSize: 22,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 16,
    color: '#46583D',
    fontWeight: 'bold',
    fontFamily: "Lato",
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#772F1A',
    borderRadius: 40,
    marginTop: 10,
    paddingLeft: 16,
  },
  iconContainer: {
    marginRight: 10,
  },
  horizIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 40,
  },
  searchBar: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    color: '#FFF',
  },
  searchText: {
    color: '#FFF',
    paddingHorizontal: 16,
    fontWeight: 'bold',
    fontSize: 18,
  },
  icon: {
    width: 150,
    height: 150,
    marginLeft: -20,
  },
  rotatedIcon15: {
    transform: [{ rotate: '13.38deg'}],
    width: 150,
    height: 150,
    marginLeft: 30,
  },
  buttonContainer: {
    width: 150,
    height: 150,
    marginLeft: -20,
  },
  button: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 16,
    color: '#46583D',
    fontWeight: 'bold',
  },
});

export default HomeScreenMVP;
