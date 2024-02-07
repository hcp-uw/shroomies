import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fungi Find</Text>
      <Text style={styles.subtitle}>What are you looking for?</Text>
      <View style={styles.searchBarContainer}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/mglass2.png')}
            style={styles.icon}
          />
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onFocus={() => setSearchText('')}
        />
        <Text style={styles.searchText}>Search</Text>
      </View>
      {/* Add your additional UI components and logic here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
    marginTop: 50,
    backgroundColor: '#FFF2E9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#772F1A',
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 16,
    color: '#46583D',
    fontWeight: 'bold',
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
  icon: {
    width: 40,
    height: 40,
    tintColor: '#FFF',
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
});

export default HomeScreen;
